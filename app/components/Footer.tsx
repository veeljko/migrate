import { ThemeProvider } from "@rescui/ui-contexts";
import GlobalFooter from "@jetbrains/kotlin-web-site-ui/out/components/footer";
import "@jetbrains/kotlin-web-site-ui/out/components/footer/index.css";

export default function Footer() {
  return (
    <ThemeProvider theme="dark">
      <GlobalFooter />
    </ThemeProvider>
  );
};
