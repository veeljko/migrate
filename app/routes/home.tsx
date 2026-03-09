import { WhyKotlinSection } from "../components/sections/WhyKotlinSection";
import { HeaderSection } from "../components/sections/HeaderSection";
import { LatestFromKotlinSection } from "../components/sections/LatestFromKotlinSection";
import { UsageSection } from "~/components/sections/UsageSection";
import { StartSection } from "~/components/sections/StartSection";
import "../styles/Home.scss"

export function meta() {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "Kotlin homepage" },
  ];
}

//BUGS
//kotlin usage highlights section's card have wrong css
export default function Home() {

  return (<>
    <HeaderSection />
    <LatestFromKotlinSection />
    <WhyKotlinSection />
    <UsageSection />
    <StartSection />
  </>)
}
