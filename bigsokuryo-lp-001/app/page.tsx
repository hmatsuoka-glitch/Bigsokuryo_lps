import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EntryForm from "@/components/EntryForm";
import FloatingLineButton from "@/components/FloatingLineButton";
import ScrollProgress from "@/components/ScrollProgress";
import ChancePopup from "@/components/ChancePopup";
import CtaBand from "@/components/CtaBand";
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
        <CtaBand
          eyebrow="MESSAGE"
          title="代表が語る、ビッグ測量設計の想い。"
          caption="マニュアル通りではなく、自分の頭で考えて行動する。代表からのメッセージをご覧ください。"
          href="#message"
          ctaLabel="代表メッセージを読む"
        />
        <CEOMessage />
        <Voices />
        <ProjectStories />
        <CtaBand
          eyebrow="JOB DETAIL"
          title="まずは募集要項を、見てみませんか？"
          caption="新卒・中途の2トラック。給与・賞与・休暇までしっかり開示しています。"
          href="#requirements"
          ctaLabel="募集要項を確認する"
        />
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
