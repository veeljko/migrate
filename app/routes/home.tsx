import { WhyKotlinSection } from "../components/sections/WhyKotlinSection";
import { HeaderSection } from "../components/sections/HeaderSection";
import { LatestFromKotlinSection } from "../components/sections/LatestFromKotlinSection";
import { UsageSection } from "../components/sections/UsageSection";
import { StartSection } from "../components/sections/StartSection";
import "../styles/Home.scss"
import { useLoaderData } from "react-router";

export function meta() {
  const title = "Kotlin Programming Language";
  const description = "Kotlin homepage";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://kotlinlang.org/" },
    { property: "og:image", content: "https://kotlinlang.org/images/open-graph/general.png" },
    { property: "og:description", content: description },
    { property: "og:site_name", content: "Kotlin" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@kotlin" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image:src", content: "https://kotlinlang.org/images/twitter/general.png" },
  ];
}
//This data in real project is fetched from API,
//but for the simplicity, we are fetching it from static files.
export async function loader() {
  const [
    homeSectionCardsModule,
    testimonialsModule,
    newsModule,
    programmingLanguageModule,
  ] = await Promise.all([
    import("../data/homeSectionCardsData"),
    import("../data/testimonials"),
    import("../data/newsData"),
    import("../data/programmingLanguageData"),
  ]);

  const [
    homeSectionCardsData,
    testimonials,
    newsData,
    programmingLanguageData,
  ] = await Promise.all([
    homeSectionCardsModule.getHomeSectionCardsData(),
    testimonialsModule.getTestimonials(),
    newsModule.getNewsData(),
    programmingLanguageModule.getTabs(),
  ]);

  return {
    homeSectionCardsData,
    testimonials,
    newsData,
    programmingLanguageData,
  }
}

export default function Home() {
  const { homeSectionCardsData,
        newsData,
        testimonials,
        programmingLanguageData : tabs }
         = useLoaderData<typeof loader>();

  return (<>
    <HeaderSection homeSectionCardsData={homeSectionCardsData}/>
    <LatestFromKotlinSection newsData={newsData}/>
    <WhyKotlinSection tabs={tabs} />
    <UsageSection testimonials={testimonials} />
    <StartSection />
  </>)
}
