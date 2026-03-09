import { WhyKotlinSection } from "../components/sections/WhyKotlinSection";
import { HeaderSection } from "../components/sections/HeaderSection";
import { LatestFromKotlinSection } from "../components/sections/LatestFromKotlinSection";
import { UsageSection } from "../components/sections/UsageSection";
import { StartSection } from "../components/sections/StartSection";
import "../styles/Home.scss"
import Footer from "../components/Footer";
import Header from "../components/Header";

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

export default function Home() {

  return (<>
    <Header/>
    <HeaderSection />
    <LatestFromKotlinSection />
    <WhyKotlinSection />
    <UsageSection />
    <StartSection />
    <Footer/>
  </>)
}
