import AnimatedNumber from "@/components/AnimatedNumber";
import Reveal from "@/components/Reveal";

const stats = [
  { value: 45, suffix: "年", label: "創業からの歴史", note: "1980 年" },
  { value: 163, suffix: "名", label: "社員数", note: "'24 年 3 月" },
  { value: 88.6, decimals: 1, suffix: "%", label: "有給取得率", note: "実績" },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-sand/40">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-brand">ABOUT US</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            数字で見るビッグ測量設計
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-l border-navy/15">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-r border-b border-navy/15 p-6 md:p-8 bg-white"
            >
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-brand">
                {s.note}
              </p>
              <p className="mt-3 text-4xl md:text-5xl font-bold text-navy tracking-tight leading-none">
                <AnimatedNumber end={s.value} decimals={s.decimals ?? 0} />
                <span className="text-sm md:text-lg ml-1 text-black/65">
                  {s.suffix}
                </span>
              </p>
              <p className="mt-4 text-sm md:text-base text-black/75">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <Reveal delay={300} className="mt-10 md:mt-14 max-w-3xl">
          <div className="border-l-4 border-brand pl-5 py-1">
            <p className="text-sm md:text-base text-black/85 leading-relaxed">
              鉄道工事測量を起点に、東京の重要インフラ整備を技術で支えてきた総合測量会社。
              「健康企業宣言 銀の認定」(2025 年 7 月) 取得。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
