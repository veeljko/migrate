import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      "@react-hook/resize-observer": path.resolve(
        __dirname,
        "app/shims/resize-observer.ts"
      ),
    },
  },
  ssr: {
    noExternal: [
      "@rescui/*",
      "@jetbrains/kotlin-web-site-ui",
    ],
  },
});
