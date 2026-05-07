import type { Metadata } from "next";
import SiteHeader from "@/components/recruit/SiteHeader";
import SiteFooter from "@/components/recruit/SiteFooter";
import EntryForm from "@/components/recruit/EntryForm";
import Hero from "@/components/recruit/lp002/Hero";
import About from "@/components/recruit/lp002/About";
import TechStack from "@/components/recruit/lp002/TechStack";
import CareerModel from "@/components/recruit/lp002/CareerModel";
import Voices from "@/components/recruit/lp002/Voices";
import Benefits from "@/components/recruit/lp002/Benefits";
import FAQ from "@/components/recruit/lp002/FAQ";

export const metadata: Metadata = {
  title: "中途採用 | あなたの技術が、地域の標準になる。",
  description:
    "ビッグ測量株式会社の経験者・中途採用ページ。最新の3D計測機器、評価される技術文化、3つのキャリアトラックをご紹介します。",
};

export default function MidCareerLP() {
  return (
    <>
      <SiteHeader
        lpCode="LP-002 / 中途採用"
        tone="amber"
        ctaLabel="カジュアル面談"
      />
      <main>
        <Hero />
        <About />
        <TechStack />
        <CareerModel />
        <Voices />
        <Benefits />
        <FAQ />
        <EntryForm
          category="中途・キャリア"
          accentClass="bg-gradient-to-r from-amber-600 to-rose-700 hover:opacity-90"
        />
      </main>
      <SiteFooter />
    </>
  );
}
