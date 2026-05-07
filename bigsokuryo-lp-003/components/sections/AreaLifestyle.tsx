const points = [
  {
    title: "上野・御徒町から徒歩圏",
    body: "JR御徒町駅から徒歩4分、つくばエクスプレス新御徒町駅から徒歩1分、各線上野駅から徒歩10分。乗換に強い都心立地です。",
  },
  {
    title: "完全週休2日・年休125日",
    body: "土日祝休み、夏季休暇（8/10〜15）、GW、年末年始（12/30〜1/5）、慶弔特別休暇。区切られた休みでメリハリ良く働けます。",
  },
  {
    title: "有給取得率 79.9%",
    body: "執行役員からの公表値。繁忙期の偏りはあれど、休みやすい空気が日々の前提です。",
  },
  {
    title: "「健康企業宣言」銀の認定",
    body: "2025年7月取得。有資格者による無料マッサージ、夜食手当（夜勤1日1,000円）など、現場の体を守る制度を整えています。",
  },
];

export default function AreaLifestyle() {
  return (
    <section id="area" className="py-24 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-emerald-700 text-center">
          WORK STYLE
        </p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
          長く続けられる、4つの理由。
        </h2>
        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {points.map((p) => (
            <article
              key={p.title}
              className="bg-white rounded-2xl p-7 border border-emerald-700/15 hover:border-emerald-700/40 transition"
            >
              <h3 className="font-serif text-xl text-navy">{p.title}</h3>
              <p className="mt-3 text-sm text-navy/70 leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
