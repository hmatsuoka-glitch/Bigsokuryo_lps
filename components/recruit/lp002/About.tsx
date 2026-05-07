export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <p className="text-xs tracking-[0.4em] text-gold">WHY US</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy leading-snug">
            「ただ測る」<br />会社では、ない。
          </h2>
        </div>
        <div className="md:col-span-7 space-y-5 text-navy/80 leading-relaxed">
          <p>
            ビッグ測量は、自治体の道路・河川といった公共測量の比率が高く、
            UAV・MMS・地上レーザーを自社保有する技術会社です。
          </p>
          <p>
            地域インフラの基礎データを担うため、納期や精度に対する要求は厳しい。
            しかしその分、確かな技術が正当に評価される文化があります。
          </p>
          <p className="border-l-4 border-gold pl-4 text-navy">
            年収レンジは450〜780万円。前職を踏まえた個別オファーを行い、
            副業・社外活動も原則OK。
          </p>
        </div>
      </div>
    </section>
  );
}
