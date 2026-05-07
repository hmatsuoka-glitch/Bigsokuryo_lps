const flow = [
  { step: "STEP 1", label: "エントリー", body: "当サイトのフォーム、または各求人媒体より。" },
  { step: "STEP 2", label: "書類選考", body: "履歴書・職務経歴書をもとに選考。" },
  { step: "STEP 3", label: "1 次面接", body: "現場責任者との個別面接。" },
  { step: "STEP 4", label: "最終面接", body: "部署責任者との個別面接。" },
  { step: "STEP 5", label: "内定", body: "内定通知を郵送。入社時期は相談に応じます。" },
];

const faqs = [
  {
    q: "経験者として中途入社する場合、どんなフローですか？",
    a: "書類選考 → 現場責任者との 1 次面接 → 部署責任者との最終面接 → 内定の 4 段階です。入社時期はご事情に合わせて柔軟に相談に応じます。",
  },
  {
    q: "年収はどのように決まりますか？",
    a: "前職・経験・保有資格を踏まえて個別にオファーします。試用期間は 3 ヶ月。30 歳で入社された経験者の年収実績は 1 年目 390 万 → 5 年目 520 万円です。資格手当 (技術士なら月 10 万円) と職務手当が別途加算されます。",
  },
  {
    q: "鉄道工事の経験がないと不利ですか？",
    a: "いいえ。鉄道工事測量は社内 OJT と「JR 東日本在来線工事管理者」等の資格取得支援で身につける社員が多数です。公共測量・道路・トンネル・空港など多様な現場があり、得意領域から段階的に広げていけます。",
  },
  {
    q: "残業や夜勤はありますか？",
    a: "鉄道現場では線路閉鎖の関係で夜勤 (20:00 - 翌 5:00) が発生することがあります。深夜勤務手当 (給与 ÷ 20 日 × 1.25) と 1 日 1,000 円の夜食手当を全額支給。残業手当も全額支給です。",
  },
  {
    q: "資格取得のサポートはありますか？",
    a: "測量士・測量士補は試験費用を会社が全額負担。年 2 回の社内勉強会で技術向上の機会も用意しています。資格手当は測量士 月 1.5 万、1 級土木施工管理技士 月 1 万、技術士 月 10 万 ほか。",
  },
  {
    q: "勤務地・通勤はどうなりますか？",
    a: "本社は東京都台東区東上野 (JR 御徒町駅 徒歩 4 分 / つくばエクスプレス新御徒町駅 徒歩 1 分 / 各線上野駅 徒歩 10 分)。遠方の方には単身 1R で月 3 万円の社員寮があります。",
  },
  {
    q: "面接前にカジュアル面談はできますか？",
    a: "可能です。エントリーフォームに「カジュアル面談希望」と記載いただくか、人事部 (saiyou@bigsdc.co.jp) までご連絡ください。",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-sand">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-gold text-center">FLOW & FAQ</p>
        <h2 className="mt-3 font-sans font-bold text-3xl text-navy text-center">
          選考フロー & よくある質問
        </h2>

        <ol className="mt-12 grid md:grid-cols-5 gap-3">
          {flow.map((f) => (
            <li
              key={f.step}
              className="rounded-xl bg-white border border-navy/10 p-5"
            >
              <p className="text-[11px] tracking-widest text-gold">{f.step}</p>
              <p className="mt-2 font-sans font-bold text-navy">{f.label}</p>
              <p className="mt-2 text-xs text-navy/65 leading-relaxed">
                {f.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group bg-white rounded-xl border border-navy/10 px-6 py-5"
            >
              <summary className="cursor-pointer list-none flex justify-between items-center text-navy font-bold gap-4">
                <span className="flex-1">{item.q}</span>
                <span className="text-gold group-open:rotate-45 transition flex-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-navy/70 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
