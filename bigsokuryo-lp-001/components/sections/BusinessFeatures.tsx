"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const features = [
  {
    tag: "FIELD",
    title: "鉄道工事測量に強い",
    body: "線路閉鎖作業や営業線近接作業など、ミリ単位のズレも許されない鉄道現場で多数の実績。東京駅丸の内駅舎復原、銀座線渋谷駅移設など、首都圏の主要プロジェクトに参画。",
    points: ["鉄道工事測量", "空港工事測量", "トンネル工事測量", "道路工事測量"],
  },
  {
    tag: "PATENT",
    title: "特許技術 1ミクロン精度計測",
    body: "構造物上の基準点測量方法及びシステムで特許取得。0.001mmという、人の目では捉えられないスケールで構造物の変位を捉えます。レーザートラッカーやMONMOSとの組合せで精密アライメントにも対応。",
    points: [
      "特許「構造物上の基準点測量方法」",
      "レーザートラッカー2台",
      "MONMOS 4台（NET1AXIIT 他）",
    ],
  },
  {
    tag: "3D",
    title: "3D点群・写真測量・3DCG",
    body: "3Dレーザースキャナで非接触に点群データを取得し、危険箇所の調査も安全に。写真測量・オルソモザイクと組み合わせて、文化財調査や駅構内の支障物調査までを一気通貫で。",
    points: [
      "SCAN STATION P50 ほか3Dレーザー",
      "Pix4Dmapper / Autodesk Infrastructure",
      "点群→3DCGによる完成イメージ可視化",
    ],
  },
];

const clientGroups = [
  {
    label: "公共機関",
    items: [
      "東京都（建設局・港湾局・財務局・都市整備局）",
      "環境省",
    ],
  },
  {
    label: "民間（一部）",
    items: [
      "大林組",
      "大林道路",
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
    <section id="features" className="py-24 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold text-center">
            OUR FIELD
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
            事業の特徴
          </h2>
          <p className="mt-4 text-center text-sm text-navy/65 max-w-xl mx-auto">
            「現場×特許技術×3D」の3本柱で、ほかの会社にはない測量を提供しています。
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <StaggerItem
              key={f.title}
              className="bg-white rounded-2xl p-7 border border-navy/10 relative overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <span className="absolute top-4 right-5 text-[10px] tracking-[0.3em] text-gold/70">
                0{i + 1} / {f.tag}
              </span>
              <h3 className="mt-4 font-serif text-xl text-navy leading-snug">
                {f.title}
              </h3>
              <p className="mt-3 text-sm text-navy/75 leading-relaxed">
                {f.body}
              </p>
              <ul className="mt-5 space-y-1.5">
                {f.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-xs text-navy/70"
                  >
                    <span className="mt-1 w-1 h-1 rounded-full bg-gold shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-16">
          <div className="bg-white rounded-2xl border border-navy/10 p-7 md:p-9">
            <p className="text-xs tracking-[0.3em] text-gold">CLIENTS</p>
            <h3 className="mt-2 font-serif text-2xl text-navy">
              主な取引先
            </h3>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {clientGroups.map((g) => (
                <div key={g.label}>
                  <p className="text-xs tracking-widest text-navy/55 mb-2">
                    {g.label}
                  </p>
                  <p className="text-sm text-navy/85 leading-relaxed">
                    {g.items.join("／")}
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
