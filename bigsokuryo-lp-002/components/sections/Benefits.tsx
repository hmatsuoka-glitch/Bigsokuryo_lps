const groups = [
  {
    label: "給与・賞与",
    items: [
      ["月給", "21 万円以上 (前職・経験考慮 / 試用期間 3 ヶ月)"],
      ["賞与", "年 2 回 (7/15・12/15) / 計 2 ヶ月分"],
      ["昇給", "年 1 回 (4 月)"],
      ["30 歳経験者の年収実績", "1 年目 390 万 → 5 年目 520 万円"],
    ],
  },
  {
    label: "諸手当",
    items: [
      ["交通費", "全額支給"],
      ["残業手当", "全額支給"],
      ["深夜勤務手当", "給与 ÷ 20 日 × 1.25"],
      ["休日出勤手当", "給与 ÷ 20 日 × 1.25"],
      ["夜食手当", "夜勤 1 日につき 1,000 円"],
      ["住宅手当", "持家 月 2 万円 / 借家 月 1.5 万円"],
      ["家族手当", "配偶者 月 5,000 円 / 子 1 人月 1 万円"],
      [
        "資格手当",
        "技術士 月 10 万 / 1 級土木施工管理 月 1 万 / 測量士 月 1.5 万 / 測量士補 月 5,000 円",
      ],
      ["職務手当", "主任 1 万 / 係長 2 万 / 課長補佐 3 万 / 課長 10 万"],
    ],
  },
  {
    label: "休日・休暇",
    items: [
      ["勤務時間", "8:00 - 17:00 (実働 8 時間 / 休憩 60 分)"],
      ["休日", "土・日・祝"],
      ["夏季休暇", "8 月 10 日 〜 15 日"],
      ["年末年始", "12 月 28 日 〜 1 月 5 日"],
      ["その他", "GW / 慶弔特別休暇"],
      ["有給取得率", "79.9 %"],
    ],
  },
  {
    label: "福利厚生・社内制度",
    items: [
      ["保険", "健康・厚生年金・雇用・労災"],
      ["資格支援", "測量士 / 測量士補 試験費用 会社負担"],
      ["社員寮", "単身 1R 月 3 万円"],
      ["保養所", "新潟県湯沢"],
      ["備品貸与", "作業着・電卓・事務用品 全て会社支給"],
      ["社内勉強会", "年 2 回 (技術向上目的)"],
      ["健康サポート", "有資格者による無料マッサージ"],
      ["女性支援", "産休・育休制度"],
      ["認定", "健康企業宣言 「銀の認定」 (2025 年 7 月)"],
    ],
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-gold text-center">
          BENEFITS
        </p>
        <h2 className="mt-3 font-sans font-bold text-3xl md:text-4xl text-navy text-center">
          技術が、正しく報われる。
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div
              key={g.label}
              className="rounded-2xl border border-navy/10 p-7 bg-sand/40"
            >
              <p className="text-xs tracking-widest text-gold">{g.label}</p>
              <dl className="mt-5 divide-y divide-navy/10">
                {g.items.map(([k, v]) => (
                  <div
                    key={k}
                    className="grid grid-cols-3 gap-4 py-3 text-sm"
                  >
                    <dt className="text-navy/60 text-xs md:text-sm">{k}</dt>
                    <dd className="col-span-2 text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
