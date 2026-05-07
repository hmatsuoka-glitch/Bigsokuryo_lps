"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const projects = [
  {
    no: "01",
    label: "OLYMPIC",
    title: "海の森水上競技場 地形測量",
    period: "2020 東京オリンピック・パラリンピック",
    body: "ボート・カヌー競技会場の建設に向けた、基準点・水準・地形測量と埋設物調査。広範囲かつ短期間、雨が天敵という環境のなか、1班3人体制×3班で土日も体制を組んで完遂。社名が成果に明記される、一切の妥協が許されない仕事です。",
    keywords: ["公共測量", "基準点・水準・地形", "土日体制 1班3人×3班"],
    accent: "from-sky-100 to-emerald-50",
  },
  {
    no: "02",
    label: "TOKYO STATION",
    title: "東京駅丸の内駅舎 復原工事",
    period: "戦争で失われた創建当時の姿へ",
    body: "歴史的価値の高い駅舎の復原。通行人や観光客の安全と動線に配慮しながら、観光客への道案内も行いながら現場を進めました。「歴史的瞬間に携われた」という誇りが、いまも社員に残っています。",
    keywords: ["復原工事", "歴史的構造物", "通行人配慮"],
    accent: "from-amber-50 to-rose-50",
  },
  {
    no: "03",
    label: "GINZA LINE",
    title: "銀座線 渋谷駅 移設工事",
    period: "ホームを130m表参道側へ",
    body: "明治通りをまたぐ形で、ホームを大移動。線路敷設は数ミリのズレも許されないパズル作業。高さ10m以上で器械を覗くシーンもあり、技術と集中力が試される現場でした。",
    keywords: ["鉄道工事測量", "数ミリ精度", "高所作業"],
    accent: "from-slate-100 to-sky-50",
  },
  {
    no: "04",
    label: "EXHIBITION",
    title: "工事展示室の企画・制作",
    period: "受注からオープンまで3ヶ月",
    body: "コンペティションを経て受注した工事展示室。施工管理とコンテンツ制作を一貫して実施し、リピーター多数の空間に。制作から4年経った映像が今も様々な場面で使われています。「工事と地域を結ぶ」役割を、測量会社が形にした事例です。",
    keywords: ["企画・制作", "施工管理", "コンテンツ制作"],
    accent: "from-emerald-50 to-amber-50",
  },
];

export default function ProjectStories() {
  return (
    <section id="projects" className="py-24 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold text-center">
            PROJECT STORY
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
            プロジェクトストーリー
          </h2>
          <p className="mt-4 text-center text-sm text-navy/65 max-w-xl mx-auto">
            東京の景色を支える測量。私たちが関わってきた、忘れられない現場の話。
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <StaggerItem
              key={p.title}
              className={`rounded-2xl border border-navy/10 p-7 bg-gradient-to-br ${p.accent} hover:-translate-y-1 transition-transform`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-xs tracking-[0.4em] text-gold font-bold">
                  {p.no} / {p.label}
                </p>
                <p className="text-[11px] text-navy/55 text-right">
                  {p.period}
                </p>
              </div>
              <h3 className="mt-3 font-serif text-2xl text-navy leading-snug">
                {p.title}
              </h3>
              <p className="mt-4 text-sm text-navy/80 leading-relaxed">
                {p.body}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.keywords.map((k) => (
                  <li
                    key={k}
                    className="text-[11px] tracking-widest text-navy/70 border border-navy/15 bg-white/60 backdrop-blur px-2.5 py-1 rounded-full"
                  >
                    {k}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
