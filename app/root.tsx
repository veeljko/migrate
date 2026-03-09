import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import jbSansCss from "@rescui/typography/lib/font-jb-sans-auto.css?url";
import highlightCss from "highlight.js/styles/github.css?url";
import headerCss from "@jetbrains/kotlin-web-site-ui/out/components/header/index.css?url";
import footerCss from "@jetbrains/kotlin-web-site-ui/out/components/footer/index.css?url";
import gridCss from "./styles/grid.scss?url";
import stylesV2Css from "./styles/styles-v2.scss?url";
import jbMonoRegular from "../assets/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2?url";
import jbMonoBold from "../assets/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2?url";
import jbMonoItalic from "../assets/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2?url";

export const links: Route.LinksFunction = () => [
  { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
  { rel: "dns-prefetch", href: "//fonts.gstatic.com" },
  { rel: "dns-prefetch", href: "//resources.jetbrains.com" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "preload", href: jbMonoRegular, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
  { rel: "preload", href: jbMonoBold, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
  { rel: "preload", href: jbMonoItalic, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
  { rel: "icon", type: "image/svg+xml", href: "/images/favicon.svg" },
  { rel: "alternate icon", href: "/images/favicon.ico" },
  { rel: "apple-touch-icon", href: "/images/apple-touch-icon.png" },
  { rel: "apple-touch-icon", sizes: "72x72", href: "/images/apple-touch-icon-72x72.png" },
  { rel: "apple-touch-icon", sizes: "114x114", href: "/images/apple-touch-icon-114x114.png" },
  { rel: "apple-touch-icon", sizes: "144x144", href: "/images/apple-touch-icon-144x144.png" },
  { rel: "stylesheet", href: jbSansCss },
  { rel: "stylesheet", href: highlightCss },
  { rel: "stylesheet", href: headerCss },
  { rel: "stylesheet", href: footerCss },
  { rel: "stylesheet", href: gridCss },
  { rel: "stylesheet", href: stylesV2Css },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
