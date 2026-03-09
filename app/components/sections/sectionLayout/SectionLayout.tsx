import { ThemeProvider } from "@rescui/ui-contexts";
import cn from "classnames";
import type { SectionProps, ContainerProps, PageSectionProps } from "./SectionLayoutTypes";

function Section({ children, className }: SectionProps) {

  return <section className={cn("kto-layout-section", className)}>{children}</section>;
}

function Container({ children }: ContainerProps) {
  return <div className="kto-layout-container">{children}</div>;
}

export function PageSection({
  children,
  className,
  theme,
  withContainer = true,
}: PageSectionProps) {
  const content = (
    <Section className={className}>
      {withContainer ? <Container>{children}</Container> : children}
    </Section>
  );

  if (!theme) {
    return content;
  }

  return <ThemeProvider theme={theme}>{content}</ThemeProvider>;
}
