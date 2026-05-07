const groups = [
  {
    label: "給与",
    items: [
      ["初任給（大卒）", "月給 210,000円"],
      ["初任給（専門卒）", "月給 207,000円"],
      ["初任給（高卒）", "月給 205,000円"],
      ["1年目年収実績", "340万円（大卒）"],
      ["賞与", "年2回（7月／12月）計2か月"],
      ["昇給", "年1回（4月）"],
    ],
  },
  {
    label: "諸手当",
    items: [
      ["残業手当", "全額支給"],
      ["深夜・休日手当", "給与÷20日×1.25"],
      ["夜食手当", "夜勤1日につき1,000円"],
      ["運転手当", "現場運転時に支給"],
      ["住宅手当", "持ち家2万円／借家1.5万円"],
      ["家族手当", "配偶者5千円／子1万円（1名）"],
      ["資格手当", "測量士1.5万円・技術士10万円 ほか"],
      ["職務手当", "主任1万〜課長10万円"],
    ],
  },
  {
    label: "休日・支援",
    items: [
      ["休日", "完全週休2日（土日祝）"],
      ["年間休日", "夏季・年末年始・GW・慶弔休"],
      ["有給取得率", "79.9%（執行役員談）"],
      ["社員寮", "単身1R／月3万円"],
      ["保養所", "新潟県湯沢"],
      ["資格支援", "測量士・補の試験費用を会社負担"],
      ["健康支援", "有資格者による無料マッサージ"],
      ["産休・育休", "制度あり（女性支援強化）"],
    ],
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-emerald-700 text-center">
          BENEFITS
        </p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
          数字で見る、安心。
        </h2>
        <p className="mt-4 text-sm text-navy/60 text-center max-w-xl mx-auto">
          給与・諸手当・休日・支援制度。長く続けられる仕組みを、まとめて公開しています。
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className="text-xs tracking-[0.3em] text-emerald-700 mb-4">
                {g.label.toUpperCase()}
              </h3>
              <dl className="divide-y divide-emerald-700/15 border-t border-emerald-700/15">
                {g.items.map(([k, v]) => (
                  <div key={k} className="py-3.5">
                    <dt className="text-[11px] tracking-widest text-navy/50">
                      {k}
                    </dt>
                    <dd className="mt-1 text-sm text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-navy/50">
          ※ 健康企業宣言「銀の認定」取得（2025年7月）
        </p>
      </div>
    </section>
  );
}
