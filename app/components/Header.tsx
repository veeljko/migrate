import React, { useEffect } from "react";
import GlobalHeader from "@jetbrains/kotlin-web-site-ui/out/components/header";
import "@jetbrains/kotlin-web-site-ui/out/components/header/index.css";

export default function Header() {
  const [isClient, setIsClient] = React.useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <GlobalHeader searchConfig={{}} />;
}
