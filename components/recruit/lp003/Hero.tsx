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
          U / I TURN RECRUITMENT
        </p>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.3] text-navy text-balance">
          測量と暮らしが、<br />
          <span className="text-emerald-700">ちょうどいい。</span>
        </h1>
        <p className="mt-8 max-w-xl text-navy/80 leading-relaxed">
          通勤15分、川沿いの家、夕方には子どもと過ごす時間。<br />
          地方で測量の専門性を発揮しながら、暮らしの輪郭をはっきりさせていく――
          そんな働き方を、私たちは本気でつくっています。
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#entry"
            className="px-7 py-3 rounded-full bg-emerald-700 text-white text-sm tracking-widest hover:bg-emerald-900 transition"
          >
            移住相談からはじめる
          </a>
          <a
            href="#area"
            className="px-7 py-3 rounded-full border border-emerald-700/40 text-emerald-900 text-sm tracking-widest hover:bg-emerald-700 hover:text-white transition"
          >
            エリアを知る
          </a>
        </div>
      </div>
    </section>
  );
}
