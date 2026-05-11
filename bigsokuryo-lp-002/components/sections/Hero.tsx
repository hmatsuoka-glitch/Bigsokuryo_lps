import AnimatedNumber from "@/components/AnimatedNumber";

const HERO_IMAGE_SRC = "/works_img.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center animate-kenburns"
        style={{ backgroundImage: `url('${HERO_IMAGE_SRC}')` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/55 to-brand-dark/90"
      />

      <div className="relative max-w-6xl mx-auto px-6 min-h-[88vh] md:min-h-[92vh] flex flex-col">
        <div className="flex-1 flex items-end pt-24 pb-12 md:pb-16">
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.4em] text-gold mb-5">
              MID-CAREER RECRUITMENT / 経験者採用
            </p>
            <h1 className="font-sans font-bold text-3xl md:text-6xl lg:text-7xl leading-[1.25] tracking-tight">
              鉄道・道路・トンネル。<br />
              東京を、<span className="text-gold">ミリ単位</span>で測る。
            </h1>
            <p className="mt-6 max-w-xl text-sm md:text-base text-white/85 leading-relaxed">
              1980 年創業、社員 163 名。<br />
              東京駅・銀座線渋谷駅・五輪会場 ―― 誰もが知る現場の地盤を、
              創業 45 年で支えてきた東上野の総合測量会社です。
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
              <a
                href="#entry"
                className="cta-shine group inline-flex items-center gap-2 px-7 py-3 bg-gold text-navy font-bold text-xs md:text-sm tracking-widest hover:bg-white transition-colors"
              >
                エントリー
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#business"
                className="inline-flex items-center gap-2 px-7 py-3 border border-white/40 text-white text-xs md:text-sm tracking-widest hover:bg-white hover:text-navy hover:border-white transition-colors"
              >
                事業内容を見る
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 py-5 grid grid-cols-2 md:grid-cols-4 gap-y-4">
          <Stat value={163} suffix="名" label="社員数" />
          <Stat value={45} suffix="年" label="創業" />
          <Stat value={0.001} decimals={3} suffix="mm" label="特許 高精度測量" />
          <Stat value={79.9} decimals={1} suffix="%" label="有給取得率" />
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  decimals = 0,
  suffix,
  label,
}: {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
}) {
  return (
    <div className="border-l border-white/15 pl-4 first:border-l-0 first:pl-0 md:pl-5">
      <p className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none">
        <AnimatedNumber end={value} decimals={decimals} />
        <span className="text-sm ml-1 text-gold">{suffix}</span>
      </p>
      <p className="mt-2 text-[10px] tracking-widest text-white/60">{label}</p>
    </div>
  );
}
