import AnimatedNumber from "@/components/AnimatedNumber";

// 背景写真は public/hero.jpg に配置してください (差し替え時もファイル名は固定)
const HERO_IMAGE_SRC = "/hero.jpg";

const stats = [
  { value: 163, suffix: "名", label: "SOCIAL / 社員数", decimals: 0 },
  { value: 0.001, suffix: "mm", label: "特許 高精度測量", decimals: 3 },
  { value: 79.9, suffix: "%", label: "有給取得率", decimals: 1 },
  { value: 45, suffix: "年", label: "創業からの歴史", decimals: 0 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center animate-kenburns"
        style={{ backgroundImage: `url('${HERO_IMAGE_SRC}')` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/65 to-navy/90"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(199,155,61,0.4), transparent 45%), radial-gradient(circle at 10% 80%, rgba(255,255,255,0.08), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-sand/20"
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-28 md:pt-32 md:pb-40">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <span className="text-[11px] tracking-[0.3em] text-white/90">
            MID-CAREER RECRUITMENT
          </span>
        </div>
        <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.2] tracking-tight text-balance">
          1ミクロンの精度で、<br />
          <span className="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
            東京の動脈
          </span>
          を測る。
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-lg text-white/90 leading-relaxed">
          1980 年創業、社員 163 名。<br />
          鉄道・道路・トンネル・空港 ―― 東京の重要インフラ工事を、
          特許取得の高精度測量技術で支えてきた東上野の総合測量会社です。
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#entry"
            className="cta-shine group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-navy font-bold text-sm tracking-widest hover:bg-white transition-colors"
          >
            まずはカジュアル面談
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#career"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/40 text-white text-sm tracking-widest hover:bg-white hover:text-navy hover:border-white transition-colors"
          >
            キャリアトラックを見る
          </a>
        </div>

        <ul className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
          {stats.map((s) => (
            <li
              key={s.label}
              className="border-l-2 border-gold/60 pl-4 hover:border-gold transition-colors"
            >
              <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                <AnimatedNumber
                  end={s.value}
                  decimals={s.decimals}
                  className="bg-gradient-to-r from-white to-gold bg-clip-text text-transparent"
                />
                <span className="text-base ml-1 text-gold">{s.suffix}</span>
              </p>
              <p className="text-[11px] tracking-widest text-white/60 mt-2">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
