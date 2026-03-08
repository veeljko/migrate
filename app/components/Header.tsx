import React from "react";
import GlobalHeader from "@jetbrains/kotlin-web-site-ui/out/components/header";
import "@jetbrains/kotlin-web-site-ui/out/components/header/index.css";

export default function Header(props: any) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // `GlobalHeader` reads `window` during render, so skip SSR render.
  if (!isClient) return null;

  return <GlobalHeader {...props} />;
}
