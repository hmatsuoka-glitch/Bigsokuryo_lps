const benefits = [
  ["年収レンジ", "450〜780万円（経験考慮）"],
  ["賞与", "年2回・実績連動（直近3年平均4.2ヶ月）"],
  ["住宅手当", "最大月3万円（持家・賃貸とも）"],
  ["資格手当", "測量士＋月2万円／土地家屋調査士＋月3万円"],
  ["副業", "原則OK（届出制）"],
  ["リモート", "内業中心の社員は週2日リモート可"],
  ["休日", "完全週休2日／年休125日"],
  ["有給取得率", "84%（直近実績）"],
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-gold text-center">
          BENEFITS
        </p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
          技術が、正しく報われる。
        </h2>
        <div className="mt-14 divide-y divide-navy/10 border-t border-navy/10">
          {benefits.map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-3 gap-6 py-5 text-sm md:text-base"
            >
              <dt className="text-navy/60 tracking-widest text-xs md:text-sm">
                {k}
              </dt>
              <dd className="col-span-2 text-navy">{v}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
