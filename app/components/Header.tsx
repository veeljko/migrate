import React, { useEffect } from "react";
import GlobalHeader from "@jetbrains/kotlin-web-site-ui/out/components/header";
import "@jetbrains/kotlin-web-site-ui/out/components/header/index.css";
import HeaderSkeleton from "./sections/sekeletons/HeaderSkeleton";

export default function Header() {
  const [isClient, setIsClient] = React.useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <HeaderSkeleton />;

  return <GlobalHeader searchConfig={{}} />;
}