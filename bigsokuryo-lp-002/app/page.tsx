import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ChancePopup from "@/components/ChancePopup";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import AboutUs from "@/components/sections/AboutUs";
import OurBusiness from "@/components/sections/OurBusiness";
import Projects from "@/components/sections/Projects";
import Voices from "@/components/sections/Voices";
import Special from "@/components/sections/Special";
import WorkFlow from "@/components/sections/WorkFlow";
import Recruit from "@/components/sections/Recruit";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Manifesto />
        <AboutUs />
        <Marquee />
        <OurBusiness />
        <Projects />
        <Voices />
        <Special />
        <Marquee />
        <WorkFlow />
        <Recruit />
        <FinalCTA />
      </main>
      <SiteFooter />
      <ChancePopup />
    </>
  );
}
