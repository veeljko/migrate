import { WhyKotlinSection } from "../components/sections/WhyKotlinSection";
import { HeaderSection } from "../components/sections/HeaderSection";
import { LatestFromKotlinSection } from "../components/sections/LatestFromKotlinSection";
import { UsageSection } from "../components/sections/UsageSection";
import { StartSection } from "../components/sections/StartSection";
import "../styles/Home.scss"
import Footer from "../components/Footer";
import Header from "../components/Header";

export function meta() {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "Kotlin homepage" },
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
