import type { Metadata } from "next";
import SiteHeader from "@/components/recruit/SiteHeader";
import SiteFooter from "@/components/recruit/SiteFooter";
import EntryForm from "@/components/recruit/EntryForm";
import Hero from "@/components/recruit/lp003/Hero";
import About from "@/components/recruit/lp003/About";
import AreaLifestyle from "@/components/recruit/lp003/AreaLifestyle";
import SupportProgram from "@/components/recruit/lp003/SupportProgram";
import Voices from "@/components/recruit/lp003/Voices";
import Benefits from "@/components/recruit/lp003/Benefits";
import FAQ from "@/components/recruit/lp003/FAQ";

export const metadata: Metadata = {
  title: "U・Iターン採用 | 測量と暮らしが、ちょうどいい。",
  description:
    "ビッグ測量株式会社のU・Iターン採用ページ。移住バディ制度や住宅・引越支援、地方暮らしの実感をご紹介します。",
};

export default function UITurnLP() {
  return (
    <>
      <SiteHeader
        lpCode="LP-003 / U・Iターン"
        tone="emerald"
        ctaLabel="移住相談"
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
          category="U・Iターン"
          accentClass="bg-emerald-700 hover:bg-emerald-900"
        />
      </main>
      <SiteFooter />
    </>
  );
}
