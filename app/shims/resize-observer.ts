import * as React from "react";

export type UseResizeObserverCallback = (
  entry: ResizeObserverEntry,
  observer: ResizeObserver
) => unknown;

export type UseResizeObserverOptions = { polyfill?: unknown };

type ObserverController = {
  observer: ResizeObserver;
  subscribe: (target: Element, callback: UseResizeObserverCallback) => void;
  unsubscribe: (target: Element, callback: UseResizeObserverCallback) => void;
};

const noopObserver = {
  observe() {},
  unobserve() {},
  disconnect() {},
} as unknown as ResizeObserver;

const noopController: ObserverController = {
  observer: noopObserver,
  subscribe() {},
  unsubscribe() {},
};

let controller: ObserverController | null = null;

function createResizeObserver(polyfill?: unknown): ObserverController {
  let ticking = false;
  let allEntries: ResizeObserverEntry[] = [];
  const callbacks = new Map<Element, UseResizeObserverCallback[]>();

  const ResizeObserverCtor = polyfill || window.ResizeObserver;
  const observer = new (ResizeObserverCtor as typeof ResizeObserver)(
    (entries: ResizeObserverEntry[], obs: ResizeObserver) => {
      allEntries = allEntries.concat(entries);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const triggered = new Set<Element>();

          for (let i = 0; i < allEntries.length; i += 1) {
            const entry = allEntries[i];
            if (triggered.has(entry.target)) continue;
            triggered.add(entry.target);

            const targetCallbacks = callbacks.get(entry.target);
            targetCallbacks?.forEach((cb) => cb(entry, obs));
          }

          allEntries = [];
          ticking = false;
        });
      }

      ticking = true;
    }
  );

  return {
    observer,
    subscribe(target: Element, callback: UseResizeObserverCallback) {
      observer.observe(target);
      const targetCallbacks = callbacks.get(target) ?? [];
      targetCallbacks.push(callback);
      callbacks.set(target, targetCallbacks);
    },
    unsubscribe(target: Element, callback: UseResizeObserverCallback) {
      const targetCallbacks = callbacks.get(target) ?? [];

      if (targetCallbacks.length === 1) {
        observer.unobserve(target);
        callbacks.delete(target);
        return;
      }

      const callbackIndex = targetCallbacks.indexOf(callback);
      if (callbackIndex !== -1) targetCallbacks.splice(callbackIndex, 1);
      callbacks.set(target, targetCallbacks);
    },
  };
}

function getResizeObserver(polyfill?: unknown): ObserverController {
  if (typeof window === "undefined") {
    return noopController;
  }

  if (!controller) {
    controller = createResizeObserver(polyfill);
  }

  return controller;
}

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;

export default function useResizeObserver<T extends Element>(
  target: React.RefObject<T> | React.ForwardedRef<T> | T | null,
  callback: UseResizeObserverCallback,
  options: UseResizeObserverOptions = {}
): ResizeObserver {
  const resizeObserver = React.useMemo(
    () => getResizeObserver(options.polyfill),
    [options.polyfill]
  );
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useIsomorphicLayoutEffect(() => {
    const targetEl =
      target && typeof target === "object" && "current" in target
        ? target.current
        : target;

    if (!targetEl) return () => {};

    const handler: UseResizeObserverCallback = (entry, observer) => {
      callbackRef.current(entry, observer);
    };

    resizeObserver.subscribe(targetEl as Element, handler);
    return () => {
      resizeObserver.unsubscribe(targetEl as Element, handler);
    };
  }, [target, resizeObserver]);

  return resizeObserver.observer;
}
