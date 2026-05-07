"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const growthSteps = [
  {
    year: "1年目",
    label: "現場研修",
    body: "先輩とペアで現場へ。基本機材の扱いと観測の流れを身につけます。",
  },
  {
    year: "2年目",
    label: "測量士補取得",
    body: "資格取得を会社が全面サポート。試験対策講座と受験費用も支給。",
  },
  {
    year: "3年目",
    label: "サブ担当",
    body: "小規模案件のサブ担当として、計画立案から関わります。",
  },
  {
    year: "5年目",
    label: "主任クラス",
    body: "後輩指導と現場リード。3D計測など得意分野を伸ばす研修も。",
  },
];

export default function GrowthSteps() {
  return (
    <section id="work" className="py-24 bg-sand">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold text-center">
            GROWTH STEPS
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
            5年でここまで成長できる
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid md:grid-cols-4 gap-5">
          {growthSteps.map((s, i) => (
            <StaggerItem
              key={s.year}
              className="bg-white rounded-2xl p-6 border-t-4 border-gold relative hover:-translate-y-1 transition-transform"
            >
              <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-navy text-white text-xs grid place-items-center">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xs tracking-widest text-gold">{s.year}</p>
              <h3 className="mt-1 font-serif text-xl text-navy">{s.label}</h3>
              <p className="mt-3 text-sm text-navy/70 leading-relaxed">
                {s.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
