import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EntryForm from "@/components/EntryForm";
import ChancePopup from "@/components/ChancePopup";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import OurBusiness from "@/components/sections/OurBusiness";
import WorkFlow from "@/components/sections/WorkFlow";
import AboutUs from "@/components/sections/AboutUs";
import Projects from "@/components/sections/Projects";
import Voices from "@/components/sections/Voices";
import Recruit from "@/components/sections/Recruit";
import FAQ from "@/components/sections/FAQ";

export default function Page() {
  return (
    <>
      <SiteHeader lpCode="LP-002 / 未経験歓迎" />
      <main>
        <Hero />
        <Manifesto />
        <OurBusiness />
        <WorkFlow />
        <AboutUs />
        <Projects />
        <Voices />
        <Recruit />
        <FAQ />
        <EntryForm
          category="未経験・キャリアチェンジ"
          accentClass="bg-gradient-to-r from-brand to-brand-dark hover:opacity-90"
        />
      </main>
      <SiteFooter />
      <ChancePopup />
    </>
  );
}
