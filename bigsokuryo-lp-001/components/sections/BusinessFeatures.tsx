"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const features = [
  {
    no: "01",
    tag: "FIELD",
    title: "鉄道工事測量に強い",
    body: "ミリ単位のズレも許されない鉄道現場で多数の実績。東京駅・銀座線渋谷駅など、首都圏の主要プロジェクトに参画。",
    points: ["鉄道工事測量", "空港工事測量", "トンネル工事測量", "道路工事測量"],
    icon: <IconRail />,
  },
  {
    no: "02",
    tag: "PATENT",
    title: "特許技術 1ミクロン精度計測",
    body: "「構造物上の基準点測量方法」で特許取得。0.001mm単位で構造物の変位を捉え、精密アライメントにも対応します。",
    points: [
      "特許「構造物上の基準点測量方法」",
      "レーザートラッカー2台",
      "MONMOS 4台（NET1AXIIT 他）",
    ],
    icon: <IconPatent />,
  },
  {
    no: "03",
    tag: "3D",
    title: "3D点群・写真測量・3DCG",
    body: "3Dレーザーで非接触に点群を取得。写真測量と組み合わせ、文化財調査や駅構内支障物調査まで一気通貫で対応。",
    points: [
      "SCAN STATION P50 ほか3Dレーザー",
      "Pix4Dmapper / Autodesk Infrastructure",
      "点群→3DCGによる完成イメージ可視化",
    ],
    icon: <Icon3D />,
  },
];

const clientGroups = [
  {
    label: "公共機関",
    items: ["東京都（建設局・港湾局・財務局・都市整備局）", "環境省"],
  },
  {
    label: "民間（一部）",
    items: [
      "大林組",
      "鹿島建設",
      "清水建設",
      "大成建設",
      "戸田建設",
      "前田建設工業",
      "三井住友建設",
      "JR東日本コンサルタンツ",
      "ジェイアール東海コンサルタンツ",
      "JR東日本建築設計事務所",
      "JR東日本メカトロニクス",
      "東鉄工業",
      "鉄建建設",
      "NIPPO",
      "日本道路",
      "東京電力パワーグリッド",
      "JFEエンジニアリング",
      "森ビル ほか",
    ],
  },
];

export default function BusinessFeatures() {
  return (
    <section id="features" className="py-24 md:py-32 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-dark text-center font-bold">
            OUR FIELD
          </p>
          <h2 className="mt-3 font-sans font-black text-4xl md:text-5xl text-navy text-center heading-display">
            事業の特徴
          </h2>
          <p className="mt-5 text-center text-sm md:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            「現場 × 特許技術 × 3D」の3本柱で、ほかにない測量を。
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-7 h-px w-16 bg-gold origin-left"
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 items-stretch">
          {features.map((f) => (
            <StaggerItem key={f.title} className="h-full">
              <article className="bg-white p-5 md:p-7 border border-navy/10 overflow-hidden h-full">
                <div className="flex items-start justify-between">
                  <span className="text-gold/80">{f.icon}</span>
                  <span className="text-[10px] tracking-[0.3em] text-zinc-400">
                    {f.no} / {f.tag}
                  </span>
                </div>

                <h3 className="mt-4 md:mt-5 font-sans font-bold text-base md:text-2xl text-navy leading-snug heading-display">
                  {f.title}
                </h3>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-zinc-700 leading-relaxed">
                  {f.body}
                </p>
                <ul className="mt-4 md:mt-5 space-y-1.5 md:space-y-2">
                  {f.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-xs text-zinc-700"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-16">
          <div className="bg-white  border border-navy/10 shadow-soft p-7 md:p-10 hover-lift transition-all duration-500">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <p className="text-xs tracking-[0.4em] text-gold-dark font-bold">
                CLIENTS
              </p>
              <p className="text-[11px] text-zinc-500">
                ※ 順不同・敬称略
              </p>
            </div>
            <h3 className="mt-2 font-sans font-bold text-2xl md:text-3xl text-navy heading-display">
              主な取引先
            </h3>
            <div className="mt-7 grid md:grid-cols-2 gap-8">
              {clientGroups.map((g) => (
                <div key={g.label}>
                  <p className="text-xs tracking-widest text-zinc-500 mb-3 font-bold">
                    {g.label}
                  </p>
                  <p className="text-sm text-zinc-800 leading-loose">
                    {g.items.join(" ／ ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function IconRail() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 3v18M15 3v18" />
      <path d="M5 7h14M5 11h14M5 15h14M5 19h14" />
    </svg>
  );
}
function IconPatent() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14l-2 7 5-3 5 3-2-7" />
      <circle cx="12" cy="9" r="2" fill="currentColor" />
    </svg>
  );
}
function Icon3D() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
      <path d="M3 7l9 5 9-5M12 12v10" />
    </svg>
  );
}
