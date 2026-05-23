import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EntryForm from "@/components/EntryForm";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AreaLifestyle from "@/components/sections/AreaLifestyle";
import SupportProgram from "@/components/sections/SupportProgram";
import Voices from "@/components/sections/Voices";
import Benefits from "@/components/sections/Benefits";
import FAQ from "@/components/sections/FAQ";

export default function Page() {
  return (
    <>
      <SiteHeader
        lpCode="LP-003 / 人柄採用"
        ctaLabel="話を聞いてみる"
      />
      <main>
        <Hero />
        <About />
        <AreaLifestyle />
        <SupportProgram />
        <Voices />
        <Benefits />
        <FAQ />
        <EntryForm
          category="人柄採用"
          accentClass="bg-emerald-700 hover:bg-emerald-900"
        />
      </main>
      <SiteFooter />
    </>
  );
}
