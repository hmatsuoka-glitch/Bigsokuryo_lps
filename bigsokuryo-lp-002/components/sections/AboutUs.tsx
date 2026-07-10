import AnimatedNumber from "@/components/AnimatedNumber";
import TextReveal from "@/components/TextReveal";

const stats = [
  { value: 1980, suffix: "年", label: "創業", note: "SINCE" },
  { value: 179, suffix: "名", label: "社員数", note: "'26 年 5 月" },
  { value: 88.6, decimals: 1, suffix: "%", label: "有給取得率", note: "実績" },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-7">
            <p className="font-display font-semibold text-xs md:text-sm tracking-widest text-brand">
              [ About us ]
            </p>
            <h2 className="mt-3 font-display font-extrabold text-[56px] md:text-[96px] lg:text-[105px] leading-[0.95] tracking-tight text-brand-deep">
              About<br className="md:hidden" /> us
            </h2>
            <p className="mt-3 font-sans font-bold text-lg md:text-2xl tracking-wide text-ink">
              私たちについて
            </p>

            <TextReveal
              as="p"
              className="mt-10 md:mt-14 text-base md:text-[17px] text-sub leading-[2] max-w-xl"
            >
              鉄道工事測量を起点に、東京の重要インフラ整備を技術で支えてきた総合測量会社。
              1980 年の創業以来、公共・民間を問わず多様な現場に携わり、
              「健康企業宣言 銀の認定」(2025 年 7 月) を取得。
              人柄を重視し、未経験からじっくり育てる文化があります。
            </TextReveal>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/DSC_0760%202.jpg"
                alt="ビッグ測量設計の現場"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 border-t border-black/10 pt-10 md:pt-14">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-display font-semibold text-[10px] md:text-xs tracking-[0.3em] text-brand">
                {s.note}
              </p>
              <p className="mt-2 font-display font-extrabold text-brand leading-none">
                <span className="text-5xl md:text-6xl">
                  <AnimatedNumber end={s.value} decimals={s.decimals ?? 0} />
                </span>
                <span className="ml-1 text-lg md:text-2xl font-bold">
                  {s.suffix}
                </span>
              </p>
              <p className="mt-3 text-sm md:text-base font-bold text-sub">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
