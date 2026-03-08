import { WhyKotlinSection } from "../components/sections/WhyKotlinSection";
import { HeaderSection } from "../components/sections/HeaderSection";
import { LatestFromKotlinSection } from "../components/sections/LatestFromKotlinSection";
import { UsageSection } from "~/components/sections/UsageSection";
import { StartSection } from "~/components/sections/StartSection";
import { ThemeProvider } from "@rescui/ui-contexts";
import Footer from "~/components/Footer";
// import Header from "~/components/Header";
import "../styles/Home.scss"

export function meta() {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "Kotlin homepage" },
  ];
}

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

    {/* <Footer/> */}
  </div>;
}
