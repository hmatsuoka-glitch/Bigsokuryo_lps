import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EntryForm from "@/components/EntryForm";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import CareerModel from "@/components/sections/CareerModel";
import Voices from "@/components/sections/Voices";
import Benefits from "@/components/sections/Benefits";
import FAQ from "@/components/sections/FAQ";

export default function Page() {
  return (
    <>
      <SiteHeader
        lpCode="LP-002 / 中途採用"
        ctaLabel="カジュアル面談"
      />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <CareerModel />
        <Voices />
        <Benefits />
        <FAQ />
        <EntryForm
          category="中途・キャリア"
          accentClass="bg-gradient-to-r from-brand to-brand-dark hover:opacity-90"
        />
      </main>
      <SiteFooter />
    </>
  );
}
