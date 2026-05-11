import AnimatedNumber from "@/components/AnimatedNumber";
import Reveal from "@/components/Reveal";

const clients = [
  "東京都 (建設局・港湾局・財務局・都市整備局)",
  "環境省",
  "JR東日本コンサルタンツ",
  "JR東日本建築設計事務所",
  "JR東日本メカトロニクス",
  "ジェイアール東海コンサルタンツ",
  "鹿島建設",
  "大林組",
  "清水建設",
  "大成建設",
  "戸田建設",
  "三井住友建設",
  "前田建設工業",
  "東鉄工業",
  "鉄建建設",
  "東京電力パワーグリッド",
  "日立製作所",
  "森ビル",
];

const stats = [
  { value: 45, suffix: "年", label: "創業からの歴史" },
  { value: 163, suffix: "名", label: "社員数 ('24年3月)" },
  { value: 36, suffix: "名", label: "測量士 有資格者" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white relative">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-gold/40"
      />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
        <Reveal className="md:col-span-5 md:sticky md:top-24">
          <p className="text-xs tracking-[0.4em] text-gold">WHY US</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-[1.2]">
            「ただ測る」<br />
            会社では、ない。
          </h2>
          <p className="mt-6 text-sm md:text-base text-black/75 leading-relaxed">
            創業 1980 年。鉄道工事測量を起点に、東京の重要インフラ整備を
            技術で支えてきた総合測量会社です。線路閉鎖作業・営業線近接作業
            など高難度の鉄道現場で積み上げた実績が、私たちの背骨です。
          </p>
        </Reveal>
        <div className="md:col-span-7 space-y-6">
          <div className="grid grid-cols-3 gap-3 md:gap-4 text-center">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 120}
                className="card-hover  border border-navy/10 p-5 md:p-6 bg-gradient-to-br from-white to-sand/40"
              >
                <p className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
                  <AnimatedNumber end={s.value} />
                  <span className="text-sm ml-1 text-gold">{s.suffix}</span>
                </p>
                <p className="text-[11px] tracking-widest text-black/60 mt-3">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal
            delay={300}
            className=" border border-navy/10 p-6 md:p-7 bg-white"
          >
            <p className="text-xs tracking-widest text-gold mb-4">
              主な取引先 (一部)
            </p>
            <ul className="flex flex-wrap gap-2 text-xs md:text-sm text-black/85">
              {clients.map((c) => (
                <li
                  key={c}
                  className="border border-navy/15 rounded-full px-3 py-1.5 transition-all hover:border-gold hover:text-navy hover:bg-sand/60 hover:-translate-y-0.5 cursor-default"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={400}>
            <p className="text-sm md:text-base text-black/75 leading-relaxed border-l-4 border-gold pl-5 py-1">
              東京都・JR グループ・大手ゼネコン ―― 名前を聞けば誰もが知る現場で、
              <strong className="text-navy">「ビッグ測量設計」</strong>の社名は
              成果に明記され、責任とともに刻まれます。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
