// 背景写真は public/hero.jpg に配置してください (差し替え時もファイル名は固定)
const HERO_IMAGE_SRC = "/hero.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE_SRC}')` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/85"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(199,155,61,0.35), transparent 45%), radial-gradient(circle at 10% 80%, rgba(255,255,255,0.08), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <p className="text-xs md:text-sm tracking-[0.4em] text-gold mb-6">
          MID-CAREER RECRUITMENT
        </p>
        <h1 className="font-sans font-bold text-4xl md:text-6xl leading-[1.25] text-balance">
          あなたの技術が、<br />
          <span className="text-gold">地域の標準</span>になる。
        </h1>
        <p className="mt-8 max-w-xl text-white/80 leading-relaxed">
          測量士・土地家屋調査士・3D計測オペレーター ――
          技術を磨いてきたあなたへ。<br />
          ここには、その腕を最大限活かせる現場と、評価の仕組みがあります。
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#entry"
            className="px-7 py-3 rounded-full bg-gold text-navy font-bold text-sm tracking-widest hover:bg-white transition"
          >
            まずはカジュアル面談
          </a>
          <a
            href="#career"
            className="px-7 py-3 rounded-full border border-white/40 text-white text-sm tracking-widest hover:bg-white hover:text-navy transition"
          >
            キャリアモデルを見る
          </a>
        </div>
      </div>
    </section>
  );
}
