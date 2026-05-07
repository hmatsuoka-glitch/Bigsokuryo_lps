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
          MID-CAREER RECRUITMENT / 経験者採用
        </p>
        <h1 className="font-sans font-bold text-4xl md:text-6xl leading-[1.25] text-balance">
          1ミクロンの精度で、<br />
          <span className="text-gold">東京の動脈</span>を測る。
        </h1>
        <p className="mt-8 max-w-xl text-white/85 leading-relaxed">
          1980年創業、社員163名。<br />
          鉄道・道路・トンネル・空港 ―― 東京の重要インフラ工事を、
          特許取得の高精度測量技術で支えてきた東上野の総合測量会社です。
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
            キャリアトラックを見る
          </a>
        </div>
        <ul className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-white/90">
          <li>
            <p className="text-2xl md:text-3xl font-bold text-gold">163<span className="text-base ml-1">名</span></p>
            <p className="text-[11px] tracking-widest text-white/60 mt-1">SINCE 1980</p>
          </li>
          <li>
            <p className="text-2xl md:text-3xl font-bold text-gold">0.001<span className="text-base ml-1">mm</span></p>
            <p className="text-[11px] tracking-widest text-white/60 mt-1">特許 高精度測量</p>
          </li>
          <li>
            <p className="text-2xl md:text-3xl font-bold text-gold">79.9<span className="text-base ml-1">%</span></p>
            <p className="text-[11px] tracking-widest text-white/60 mt-1">有給取得率</p>
          </li>
          <li>
            <p className="text-2xl md:text-3xl font-bold text-gold">銀</p>
            <p className="text-[11px] tracking-widest text-white/60 mt-1">健康企業宣言 認定</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
