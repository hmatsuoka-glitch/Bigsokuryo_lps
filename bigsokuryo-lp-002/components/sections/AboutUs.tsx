import AnimatedNumber from "@/components/AnimatedNumber";
import Reveal from "@/components/Reveal";

const stats = [
  { value: 45, suffix: "年", label: "創業", note: "1980 年設立" },
  { value: 163, suffix: "名", label: "社員数", note: "2024 年 3 月時点" },
  { value: 36, suffix: "名", label: "測量士", note: "有資格者" },
  { value: 49, suffix: "名", label: "測量士補", note: "有資格者" },
  { value: 9, suffix: "名", label: "1 級土木施工管理技士", note: "有資格者" },
  { value: 79.9, decimals: 1, suffix: "%", label: "有給取得率", note: "ライフワーク" },
  { value: 0.001, decimals: 3, suffix: "mm", label: "高精度測量", note: "特許取得技術" },
  { value: 18, suffix: "+", label: "主要取引先", note: "都・JR・大手ゼネコン" },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-brand/5 blur-3xl"
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold">ABOUT US</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            数字で見るビッグ測量設計
          </h2>
          <p className="mt-5 text-sm md:text-base text-navy/70 max-w-2xl leading-relaxed">
            創業 45 年、社員 163 名。技術と実績を、数字で。
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-navy/10 border border-navy/10">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 60}
              className="bg-white p-5 md:p-7 flex flex-col justify-between min-h-[140px] md:min-h-[180px] hover:bg-sand/50 transition-colors"
            >
              <div>
                <p className="text-[10px] md:text-xs tracking-widest text-gold">
                  {s.note}
                </p>
                <p className="mt-2 text-3xl md:text-5xl font-bold text-navy tracking-tight leading-none">
                  <AnimatedNumber
                    end={s.value}
                    decimals={s.decimals ?? 0}
                  />
                  <span className="text-sm md:text-lg ml-1 text-navy/70">
                    {s.suffix}
                  </span>
                </p>
              </div>
              <p className="mt-4 text-xs md:text-sm text-navy/75 font-bold">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="mt-12 max-w-3xl">
          <div className="border-l-4 border-brand pl-5 py-2">
            <p className="text-sm md:text-base text-navy/85 leading-relaxed">
              鉄道工事測量を起点に、東京の重要インフラ整備を技術で支えてきた総合測量会社。
              線路閉鎖や営業線近接など、他社が踏み込めない高難度の現場で実績を重ねています。
              「健康企業宣言 銀の認定」(2025 年 7 月) を取得。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
