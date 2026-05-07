import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EntryForm from "@/components/EntryForm";
import FloatingLineButton from "@/components/FloatingLineButton";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import GrowthSteps from "@/components/sections/GrowthSteps";
import Voices from "@/components/sections/Voices";
import Benefits from "@/components/sections/Benefits";
import JobRequirements from "@/components/sections/JobRequirements";
import LineCTA from "@/components/sections/LineCTA";
import FAQ from "@/components/sections/FAQ";

export default function Page() {
  return (
    <>
      <SiteHeader lpCode="LP-001 / 新卒採用" />
      <main>
        <Hero />
        <About />
        <GrowthSteps />
        <Voices />
        <Benefits />
        <JobRequirements />
        <LineCTA />
        <FAQ />
        <EntryForm />
      </main>
      <SiteFooter />
      <FloatingLineButton />
    </>
  );
}
