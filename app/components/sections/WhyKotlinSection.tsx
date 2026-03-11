import Button from '@rescui/button';
import { useTextStyles } from '@rescui/typography';

import cn from 'classnames';

import { PageSection } from "./sectionLayout/SectionLayout";

import multiplatformImg from "/index/multiplatform.svg";

import { ProgrammingLanguage } from '../ProgrammingLanguage';
import "../../styles/sections/WhyKotlin.scss"
import { sections } from '../../data/whyKotlinSectionData';
import type { Tab } from '../../data/dataTypes';

export function WhyKotlinSection({ tabs }: { tabs: Tab[] }) {
  return (
    <PageSection className="why-kotlin-section" theme="light">
      <WhyKotlinContent tabs={tabs} />
    </PageSection>
  );
}

function WhyKotlinContent({ tabs }: { tabs: Tab[] }) {
  const textCn = useTextStyles();
  return (
    <>
      <h2 className={textCn('rs-hero')}>Why Kotlin</h2>

      <ProgrammingLanguage tabs={tabs} />

      {sections.map((section, index) => (
        <div key={index} className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48">
          <div className="kto-col-4 kto-col-md-12">
            <h3 className={textCn('rs-h2')}>{section.title}</h3>
            <p className={cn(textCn('rs-text-2'), 'kto-offset-top-32')}>
              {section.description}
            </p>
            <div className="kto-offset-top-32">
              <Button
                mode="outline"
                size="l"
                href={section.buttonLink}
              >
                {section.buttonText}
              </Button>
            </div>
          </div>

          <div className="kto-col-8 kto-col-md-12">
            {section.media === 'youtube' && (
              <YouTubeEmbed id={section.youtubeId} />
            )}
            {section.media === 'image' && (
              <img
                src={multiplatformImg}
                alt="Kotlin Multiplatform"
                className="why-kotlin-section__image"
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

function YouTubeEmbed({ id }: { id: string | undefined }) {
  return (
    <div className="why-kotlin-section__youtube">
      <iframe
        width="560"
        height="315"
        frameBorder="0"
        allowFullScreen
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
