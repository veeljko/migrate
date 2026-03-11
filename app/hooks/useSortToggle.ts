import { useState, useEffect } from "react";

interface UseSortToggleProps<T> {
  list: T[];
  comparator: (arg0: T, arg1: T) => number;
  localStorageName?: string;
}

export function useSortToggle<T>({ list, comparator, localStorageName }: UseSortToggleProps<T>) {
  const [isSorted, setIsSorted] = useState(false);
  const sorted = isSorted
    ? [...list].sort((a, b) => comparator(a, b))
    : list;

  useEffect(() => {
    if (localStorageName) {
      const savedOrder = localStorage.getItem(localStorageName);
      if (savedOrder === "true") {
        setIsSorted(true);
      }
    }
  }, []);

  const toggleSort = () => {
    const next = !isSorted;
    setIsSorted(next);

    if (localStorageName && typeof window !== "undefined") {
      localStorage.setItem(localStorageName, next.toString());
    }
  };

  return { sorted, isSorted, toggleSort };
}