const HERO_IMAGE_SRC = "/works_img.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE_SRC}')` }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/40 to-transparent"
      />

      <div className="relative max-w-6xl mx-auto px-6 min-h-screen flex items-end pt-20 pb-12 md:pb-16">
        <div>
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-gold mb-5">
            MID-CAREER RECRUITMENT / 経験者採用
          </p>
          <h1 className="font-sans font-bold text-3xl md:text-6xl lg:text-7xl leading-[1.25] tracking-tight drop-shadow-lg">
            鉄道・道路・トンネル。<br />
            東京を、<span className="underline underline-offset-[10px] decoration-2 decoration-white/40">ミリ単位</span>で測る。
          </h1>
          <p className="mt-6 max-w-xl text-sm md:text-base text-white/90 leading-relaxed drop-shadow">
            1980 年創業、社員 163 名。<br />
            東京駅・銀座線渋谷駅・五輪会場 ―― 誰もが知る現場の地盤を、
            創業 45 年で支えてきた東上野の総合測量会社です。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
            <a
              href="#entry"
              className="inline-flex items-center gap-2 px-7 py-3 bg-gold text-navy font-bold text-xs md:text-sm tracking-widest hover:bg-white transition-colors"
            >
              エントリー
              <span aria-hidden>→</span>
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
    </section>
  );
}
