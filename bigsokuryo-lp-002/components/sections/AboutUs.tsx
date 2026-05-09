import AnimatedNumber from "@/components/AnimatedNumber";
import Reveal from "@/components/Reveal";

const stats = [
  { value: 45, suffix: "年", label: "創業からの歴史", note: "1980 年" },
  { value: 163, suffix: "名", label: "社員数", note: "'24 年 3 月" },
  { value: 36, suffix: "名", label: "測量士", note: "有資格者" },
  { value: 49, suffix: "名", label: "測量士補", note: "有資格者" },
  { value: 9, suffix: "名", label: "1 級土木施工管理技士", note: "有資格者" },
  { value: 79.9, decimals: 1, suffix: "%", label: "有給取得率", note: "実績" },
  { value: 0.001, decimals: 3, suffix: "mm", label: "高精度測量", note: "特許技術" },
  { value: 18, suffix: "+", label: "主要取引先", note: "都・JR・大手ゼネコン" },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-sand/40 relative overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-gold">ABOUT US</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            数字で見るビッグ測量設計
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-l border-navy/15">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 50}
              className="border-r border-b border-navy/15 p-5 md:p-7 bg-white hover:bg-sand/30 transition-colors"
            >
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-gold">
                {s.note}
              </p>
              <p className="mt-3 text-3xl md:text-5xl font-bold text-navy tracking-tight leading-none">
                <AnimatedNumber end={s.value} decimals={s.decimals ?? 0} />
                <span className="text-sm md:text-lg ml-1 text-navy/65">
                  {s.suffix}
                </span>
              </p>
              <p className="mt-4 text-xs md:text-sm text-navy/75">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="mt-10 md:mt-14 max-w-3xl">
          <div className="border-l-4 border-brand pl-5 py-1">
            <p className="text-sm md:text-base text-navy/85 leading-relaxed">
              鉄道工事測量を起点に、東京の重要インフラ整備を技術で支えてきた総合測量会社。
              「健康企業宣言 銀の認定」(2025 年 7 月) 取得。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
