"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const projects = [
  {
    no: "01",
    label: "OLYMPIC",
    title: "海の森水上競技場 地形測量",
    period: "2020 東京オリンピック・パラリンピック",
    body: "ボート・カヌー競技会場の基準点・水準・地形測量と埋設物調査。1班3人×3班で土日も体制を組み、広範囲かつ短期間で完遂。社名が成果に明記される妥協なき仕事。",
    keywords: ["公共測量", "基準点・水準・地形", "土日体制 1班3人×3班"],
    accent: "from-sky-50 to-emerald-50",
    badge: "bg-sky-600",
  },
  {
    no: "02",
    label: "TOKYO STATION",
    title: "東京駅丸の内駅舎 復原工事",
    period: "戦争で失われた創建当時の姿へ",
    body: "歴史的価値の高い駅舎の復原。通行人や観光客の動線に配慮しながら現場を進行。「歴史的瞬間に携われた」誇りが、いまも社員に残ります。",
    keywords: ["復原工事", "歴史的構造物", "通行人配慮"],
    accent: "from-amber-50 to-rose-50",
    badge: "bg-amber-600",
  },
  {
    no: "03",
    label: "GINZA LINE",
    title: "銀座線 渋谷駅 移設工事",
    period: "ホームを130m表参道側へ",
    body: "明治通りをまたぐ形でホームを大移動。線路敷設は数ミリのズレも許されないパズル作業。高さ10m超で器械を覗く、技術と集中力の現場。",
    keywords: ["鉄道工事測量", "数ミリ精度", "高所作業"],
    accent: "from-slate-50 to-sky-50",
    badge: "bg-slate-700",
  },
  {
    no: "04",
    label: "EXHIBITION",
    title: "工事展示室の企画・制作",
    period: "受注からオープンまで3ヶ月",
    body: "コンペを経て受注した工事展示室。施工管理とコンテンツ制作を一貫して実施し、4年経った今も映像が使われ続けています。「工事と地域を結ぶ」役割を測量会社が形にした事例。",
    keywords: ["企画・制作", "施工管理", "コンテンツ制作"],
    accent: "from-emerald-50 to-amber-50",
    badge: "bg-emerald-700",
  },
];

export default function ProjectStories() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-dark text-center font-bold">
            PROJECT STORY
          </p>
          <h2 className="mt-3 font-sans font-black text-4xl md:text-5xl text-navy text-center heading-display">
            プロジェクトストーリー
          </h2>
          <p className="mt-5 text-center text-sm md:text-base text-navy/70 max-w-xl mx-auto leading-relaxed">
            私たちが関わってきた、東京の景色を支える現場の話。
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-7 h-px w-16 bg-gold origin-left"
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-3 md:gap-5">
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`group relative  border border-navy/10 shadow-soft p-5 md:p-8 bg-gradient-to-br ${p.accent} overflow-hidden h-full`}
              >
                <span
                  aria-hidden
                  className="absolute -top-6 -right-6 md:-top-10 md:-right-10 font-sans font-black text-[100px] md:text-[180px] text-navy/[0.05] select-none leading-none"
                >
                  {p.no}
                </span>

                <div className="relative flex items-start justify-between gap-2 flex-wrap">
                  <span
                    className={`text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-bold text-white px-2.5 md:px-3 py-1 rounded-full ${p.badge}`}
                  >
                    {p.label}
                  </span>
                  <p className="text-[10px] md:text-[11px] text-navy/55 text-right">
                    {p.period}
                  </p>
                </div>
                <h3 className="relative mt-4 md:mt-5 font-sans font-bold text-base md:text-2xl text-navy leading-snug heading-display">
                  {p.title}
                </h3>
                <p className="relative mt-3 md:mt-4 text-xs md:text-sm text-navy/85 leading-relaxed md:leading-loose">
                  {p.body}
                </p>
                <ul className="relative mt-4 md:mt-5 flex flex-wrap gap-1.5 md:gap-2">
                  {p.keywords.map((k) => (
                    <li
                      key={k}
                      className="text-[10px] md:text-[11px] tracking-widest text-navy/75 border border-navy/15 bg-white/70 backdrop-blur px-2 md:px-2.5 py-0.5 md:py-1 rounded-full"
                    >
                      {k}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
