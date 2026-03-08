import React from "react";
import { ThemeProvider } from "@rescui/ui-contexts";
import GlobalFooter from "@jetbrains/kotlin-web-site-ui/out/components/footer";
import "@jetbrains/kotlin-web-site-ui/out/components/footer/index.css";

const Footer = (props: any) => {
  return (
    <ThemeProvider theme="dark">
      <GlobalFooter {...props} />
    </ThemeProvider>
  );
};

export default Footer;