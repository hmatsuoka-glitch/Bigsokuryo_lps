"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const benefits = [
  "測量士補・測量士の受験対策講座を社内で開催",
  "資格取得時に最大15万円の祝金",
  "入社後1ヶ月の集合研修＋3ヶ月のOJT",
  "メンター制度（年齢の近い先輩がマンツーマン）",
  "ドローン国家ライセンスの取得費用全額会社負担",
  "完全週休2日制／年間休日125日",
  "残業月平均15h以内（繁忙期除く）",
  "家賃補助・帰省手当・引越補助あり",
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-navy text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 90% 10%, rgba(199,155,61,0.4), transparent 40%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold text-center">
            BENEFITS
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-center">
            新卒だからこそ、
            <br className="md:hidden" />
            安心できる制度を。
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid md:grid-cols-2 gap-x-8 gap-y-1 text-sm">
          {benefits.map((b) => (
            <StaggerItem
              key={b}
              className="flex items-start gap-3 border-b border-white/10 py-4"
            >
              <span className="text-gold mt-0.5">◆</span>
              <span className="text-white/90">{b}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
