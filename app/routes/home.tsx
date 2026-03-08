import { WhyKotlinSection } from "../components/sections/WhyKotlinSection";
import { HeaderSection } from "../components/sections/HeaderSection";
import { LatestFromKotlinSection } from "../components/sections/LatestFromKotlinSection";
import { UsageSection } from "~/components/sections/UsageSection";
import { StartSection } from "~/components/sections/StartSection";
import { ThemeProvider } from "@rescui/ui-contexts";
import "../styles/Home.scss"

export function meta() {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "Kotlin homepage" },
  ];
}

//BUGS
//kotlin usage highlights section's card have wrong css
//wrong fonts on some places
export default function Home() {
  
  return <div className="global-layout">

    <ThemeProvider theme="dark">
      <div className="overview-page">
        <HeaderSection />
        <LatestFromKotlinSection/>
        <WhyKotlinSection/>
        <UsageSection/>
        <StartSection/>
      </div>
    </ThemeProvider>

  </div>;
}
