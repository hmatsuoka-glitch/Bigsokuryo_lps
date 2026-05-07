const benefits = [
  ["引越費用", "上限30万円まで会社負担"],
  ["住宅手当", "U/Iターンの方は最大月5万円（3年間）"],
  ["移住支援金", "自治体支援（最大100万円）の申請をサポート"],
  ["帰省手当", "年2回まで往復交通費を支給"],
  ["勤務形態", "現場の少ない時期は週2日リモート可"],
  ["休日", "完全週休2日／年休125日"],
  ["残業", "月平均15h以内（繁忙期除く）"],
  ["有給取得率", "84%（直近実績）"],
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-emerald-700 text-center">
          U/I TURN BENEFITS
        </p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
          移住を後押しする、制度。
        </h2>
        <div className="mt-14 divide-y divide-emerald-700/15 border-t border-emerald-700/15">
          {benefits.map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-3 gap-6 py-5 text-sm md:text-base"
            >
              <dt className="text-emerald-800 tracking-widest text-xs md:text-sm">
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
