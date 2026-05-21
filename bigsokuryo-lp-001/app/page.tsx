import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EntryForm from "@/components/EntryForm";
import FloatingLineButton from "@/components/FloatingLineButton";
import ScrollProgress from "@/components/ScrollProgress";
import ChancePopup from "@/components/ChancePopup";
import CtaBand from "@/components/CtaBand";
import PhotoBand from "@/components/PhotoBand";
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
import TopicsBand from "@/components/sections/TopicsBand";
import Merits from "@/components/sections/Merits";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Hero />
        <StatsNumbers />
        <Merits />
        <BusinessFeatures />
        <PhotoBand
          src="/big-phot.jpg"
          alt="空港工事測量の現場"
          caption="OUR FIELD — 空港・道路・鉄道・公共インフラの現場"
        />
        <CEOMessage />
        <Voices />
        <ProjectStories />
        <PhotoBand
          src="/DSC_3338.JPG"
          alt="大規模工事現場"
          caption="PROJECTS — 首都圏の大規模インフラを支える"
        />
        <CtaBand
          eyebrow="JOB DETAIL"
          title="まずは募集要項を、見てみませんか？"
          caption="給与・賞与・休暇など、ビッグ測量の募集要項をご確認いただけます。"
          href="#requirements"
          ctaLabel="募集要項を確認する"
        />
        <Benefits />
        <JobRequirements />
        <SelectionFlow />
        <TopicsBand />
        <LineCTA />
        <EntryForm />
      </main>
      <SiteFooter />
      <FloatingLineButton />
      <ChancePopup />
    </>
  );
}
