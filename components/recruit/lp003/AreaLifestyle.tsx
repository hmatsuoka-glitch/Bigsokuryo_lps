const lifestyle = [
  {
    title: "通勤15分の生活圏",
    body: "電車のラッシュとは無縁。徒歩・自転車・車、自分にあった通勤手段を選べます。",
  },
  {
    title: "家賃は都市圏の半分以下",
    body: "2LDKで月5〜7万円。庭付き一戸建ても十分に視野に入る家賃感です。",
  },
  {
    title: "週末は山・川・海の選択肢",
    body: "事業所から1時間圏内に登山・キャンプ・サーフィンスポット。アウトドア好きには天国です。",
  },
  {
    title: "子育て・教育がしやすい",
    body: "保育園入園待機なし、医療費助成、自治体独自の教育支援も。共働き世帯でも安心です。",
  },
];

export default function AreaLifestyle() {
  return (
    <section id="area" className="py-24 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-emerald-700 text-center">
          LIFESTYLE
        </p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
          地方暮らしの、4つの実感。
        </h2>
        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {lifestyle.map((l) => (
            <article
              key={l.title}
              className="bg-white rounded-2xl p-7 border border-emerald-700/15 hover:border-emerald-700/40 transition"
            >
              <h3 className="font-serif text-xl text-navy">{l.title}</h3>
              <p className="mt-3 text-sm text-navy/70 leading-relaxed">
                {l.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
