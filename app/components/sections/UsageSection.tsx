import Button from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { cardCn } from "@rescui/card";
import cn from "classnames";

import { PageSection } from "./sectionLayout/SectionLayout";
import { testimonials } from "../../data/testimonials";

import "../../styles/sections/Usage.scss";
import { useSortToggle } from "../../hooks/useSortToggle";
import type { Testimonial } from "../../data/dataTypes";

interface UsageSectionCardProps {
  item : Testimonial;
}

function UsageSectionCard({ item }: UsageSectionCardProps) {
  const textCn = useTextStyles();
  return <a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      cardCn({
        theme: "light",
        mode: "classic",
        isClickable: true,
      }),
      "usage-section__card",
      "kto-col-4 kto-col-md-6 kto-col-sm-12"
    )}
  >
    <img
      src={item.logo}
      alt={item.company}
      className={cn("usage-section__logo", {
        usage_section__logo_spring: item.company === "Spring",
      })}
    />

    <p className={cn(textCn("rs-text-2"), "kto-offset-top-8")}>
      {item.text}
    </p>
  </a>
}


function UsageSectionContent() {
  const textCn = useTextStyles();

  const { sorted, isSorted, toggleSort } = useSortToggle({
    list: testimonials,
    comparator: (arg0, arg1) => arg0.company.localeCompare(arg1.company),
    localStorageName: "kotlin-testimonials-order"
  });

  return (
    <>
      <h2 className={textCn("rs-hero")}>Kotlin Usage Highlights</h2>

      <div
        className="kto-offset-top-16"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button mode="outline" size="s" onClick={toggleSort}>
          Sort: {isSorted ? "A-Z" : "Default"}
        </Button>
      </div>

      <div className="kto-grid kto-grid-gap-16 kto-offset-top-48">
        {sorted.map((item, index) => (
          <UsageSectionCard item={item} key={index} />
        ))}
      </div>
    </>
  );
}

export function UsageSection() {
  return (
    <PageSection className="usage-section" theme="light">
      <UsageSectionContent />
    </PageSection>
  );
}
