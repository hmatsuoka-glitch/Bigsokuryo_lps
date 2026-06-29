const HERO_IMAGE_SRC = "/top-img.JPG";

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
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-brand mb-5">
            未経験 OK / 国家資格 フルサポート
          </p>
          <h1 className="font-sans font-bold text-3xl md:text-6xl lg:text-7xl leading-[1.25] tracking-tight drop-shadow-lg">
            未経験から、<br />
            <span className="underline underline-offset-[10px] decoration-2 decoration-white/40">国家資格</span>で人生を変える。
          </h1>
          <p className="mt-6 max-w-xl text-sm md:text-base text-white/90 leading-relaxed drop-shadow">
            1980 年創業・社員 179 名のビッグ測量設計。<br />
            学歴・職歴・経験は問いません。試験費用は会社全額負担で、
            未経験から測量士・測量士補の国家資格取得をフルサポートします。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
            <a
              href="#entry"
              className="inline-flex items-center gap-2 px-7 py-3 bg-brand text-white font-bold text-xs md:text-sm tracking-widest hover:bg-white transition-colors"
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
