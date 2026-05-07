import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EntryForm from "@/components/EntryForm";
import FloatingLineButton from "@/components/FloatingLineButton";
import ScrollProgress from "@/components/ScrollProgress";
import ChancePopup from "@/components/ChancePopup";
import Hero from "@/components/sections/Hero";
import StatsNumbers from "@/components/sections/StatsNumbers";
import BusinessFeatures from "@/components/sections/BusinessFeatures";
import CEOMessage from "@/components/sections/CEOMessage";
import Voices from "@/components/sections/Voices";
import ProjectStories from "@/components/sections/ProjectStories";
import Benefits from "@/components/sections/Benefits";
import JobRequirements from "@/components/sections/JobRequirements";
import SelectionFlow from "@/components/sections/SelectionFlow";
import LineCTA from "@/components/sections/LineCTA";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Hero />
        <StatsNumbers />
        <BusinessFeatures />
        <CEOMessage />
        <Voices />
        <ProjectStories />
        <Benefits />
        <JobRequirements />
        <SelectionFlow />
        <LineCTA />
        <EntryForm />
      </main>
      <SiteFooter />
      <FloatingLineButton />
      <ChancePopup />
    </>
  );
}
