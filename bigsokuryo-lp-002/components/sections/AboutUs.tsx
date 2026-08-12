import AnimatedNumber from "@/components/AnimatedNumber";
import TextReveal from "@/components/TextReveal";

const stats = [
  { value: 1980, suffix: "年", label: "創業", note: "SINCE" },
  { value: 179, suffix: "名", label: "社員数 ('26 年 5 月時点)", note: "MEMBERS" },
  { value: 88.6, decimals: 1, suffix: "%", label: "有給取得率 (実績)", note: "PAID LEAVE" },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-white py-16 md:py-32">
      {/* SP: 全幅写真 + 英字オーバーレイ */}
      <div className="md:hidden relative aspect-[4/3] overflow-hidden bg-brand-soft mb-10">
        <img
          src="/DSC_0760%202.jpg"
          alt="ビッグ測量設計の現場"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-black/25" />
        <p
          aria-hidden
          className="absolute inset-x-4 bottom-4 font-display font-semibold text-[13px] tracking-[0.3em] text-white/85"
        >
          BIG SURVEY &amp; DESIGN
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-7">
            <p className="font-display font-semibold text-xs md:text-sm tracking-widest text-brand">
              [ About us ]
            </p>
            <h2 className="mt-3 font-display font-extrabold text-[48px] md:text-[96px] lg:text-[105px] leading-[0.95] tracking-tight text-brand-deep whitespace-nowrap">
              About us
            </h2>
            <p className="mt-3 font-sans font-bold text-base md:text-2xl tracking-wide text-ink">
              私たちについて
            </p>

            <TextReveal
              as="h3"
              className="mt-8 md:mt-14 font-sans font-extrabold text-xl md:text-4xl text-brand-deep leading-[1.5] tracking-tight"
            >
              一歩踏み出す、その先に。
            </TextReveal>

            <TextReveal
              as="p"
              delay={100}
              className="mt-6 md:mt-8 text-[15px] md:text-[17px] text-sub leading-[1.95] max-w-xl"
            >
              鉄道工事測量を起点に、東京の重要インフラ整備を技術で支えてきた総合測量会社。
              1980 年の創業以来、公共・民間を問わず多様な現場に携わり、
              「健康企業宣言 銀の認定」(2025 年 7 月) を取得。
              人柄を重視し、未経験からじっくり育てる文化があります。
            </TextReveal>
          </div>

          <div className="hidden md:block md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/DSC_0760%202.jpg"
                alt="ビッグ測量設計の現場"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-24 grid grid-cols-3 gap-3 md:gap-4 border-t border-black/10 pt-8 md:pt-14">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-display font-semibold text-[9px] md:text-xs tracking-[0.25em] text-brand">
                {s.note}
              </p>
              <p className="mt-2 font-display font-extrabold text-brand leading-none">
                <span className="text-[32px] md:text-6xl">
                  <AnimatedNumber end={s.value} decimals={s.decimals ?? 0} />
                </span>
                <span className="ml-0.5 text-sm md:text-2xl font-bold">
                  {s.suffix}
                </span>
              </p>
              <p className="mt-2 md:mt-3 text-[11px] md:text-base font-bold text-sub">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
