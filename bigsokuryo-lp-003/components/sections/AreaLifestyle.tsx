"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const points = [
  {
    icon: "🚉",
    title: "上野・御徒町から徒歩圏",
    body: "JR御徒町駅から徒歩4分、つくばエクスプレス新御徒町駅から徒歩1分、各線上野駅から徒歩10分。乗換に強い都心立地です。",
    accent: "from-emerald-100 to-emerald-50",
  },
  {
    icon: "📅",
    title: "完全週休2日・年休125日",
    body: "土日祝休み、夏季休暇（8/10〜15）、GW、年末年始（12/30〜1/5）、慶弔特別休暇。区切られた休みでメリハリ良く働けます。",
    accent: "from-amber-100 to-amber-50",
  },
  {
    icon: "🌿",
    title: "有給取得率 79.9%",
    body: "執行役員からの公表値。繁忙期の偏りはあれど、休みやすい空気が日々の前提です。",
    accent: "from-teal-100 to-teal-50",
  },
  {
    icon: "🏅",
    title: "「健康企業宣言」銀の認定",
    body: "2025年7月取得。有資格者による無料マッサージ、夜食手当（夜勤1日1,000円）など、現場の体を守る制度を整えています。",
    accent: "from-sky-100 to-sky-50",
  },
];

export default function AreaLifestyle() {
  return (
    <section
      id="area"
      className="relative py-28 bg-gradient-to-b from-emerald-50 to-emerald-100/40 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-white/60 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-emerald-700 font-bold">
            WORK STYLE
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy font-bold tracking-tight">
            長く続けられる、<span className="text-emerald-700">4つの理由</span>。
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid sm:grid-cols-2 gap-5">
          {points.map((p) => (
            <StaggerItem key={p.title}>
              <article
                className={`group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent} p-7 border border-white/60 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500`}
              >
                <div
                  aria-hidden
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/40 blur-2xl group-hover:bg-white/70 transition-colors duration-500"
                />
                <div className="relative">
                  <span className="text-3xl">{p.icon}</span>
                  <h3 className="mt-4 font-serif text-xl md:text-2xl text-navy font-bold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-navy/75 leading-[1.85]">
                    {p.body}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="absolute bottom-5 right-6 text-emerald-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                >
                  →
                </span>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
