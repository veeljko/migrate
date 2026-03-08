import { HydratedRouter } from "react-router/dom";
import { hydrateRoot } from "react-dom/client";

if (typeof globalThis.global === "undefined") {
  globalThis.global = globalThis;
}

hydrateRoot(document, <HydratedRouter />);