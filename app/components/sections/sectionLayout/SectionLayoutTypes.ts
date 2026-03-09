import type { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
}

export interface PageSectionProps {
  children: ReactNode;
  className?: string;
  theme?: "light" | "dark";
  withContainer?: boolean;
}
