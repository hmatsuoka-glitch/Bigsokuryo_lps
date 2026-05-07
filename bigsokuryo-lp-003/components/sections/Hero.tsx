export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-sand">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(16,94,80,0.15), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-emerald-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-amber-100/60 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <p className="text-xs md:text-sm tracking-[0.4em] text-emerald-700 mb-6">
          PEOPLE-FIRST RECRUITMENT
        </p>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.3] text-navy text-balance">
          思いやりを、<br />
          <span className="text-emerald-700">技術にのせて。</span>
        </h1>
        <p className="mt-8 max-w-xl text-navy/80 leading-relaxed">
          1980年から、東京・上野で測量を続けてきました。<br />
          文系出身者も、未経験者も、ここから測量人生を始めています。
          スキルより人柄を、結果より過程を、私たちは大切にしています。
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#entry"
            className="px-7 py-3 rounded-full bg-emerald-700 text-white text-sm tracking-widest hover:bg-emerald-900 transition"
          >
            まず話を聞いてみる
          </a>
          <a
            href="#about"
            className="px-7 py-3 rounded-full border border-emerald-700/40 text-emerald-900 text-sm tracking-widest hover:bg-emerald-700 hover:text-white transition"
          >
            会社を知る
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            ["創業", "1980年"],
            ["社員数", "163名"],
            ["有給取得率", "79.9%"],
            ["上野駅", "徒歩10分"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="bg-white/70 backdrop-blur rounded-xl px-4 py-3 border border-emerald-700/15"
            >
              <dt className="text-[10px] tracking-[0.3em] text-emerald-700">
                {k}
              </dt>
              <dd className="mt-1 font-serif text-xl text-navy">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
