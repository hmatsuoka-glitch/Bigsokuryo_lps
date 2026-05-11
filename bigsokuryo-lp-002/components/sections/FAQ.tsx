import Reveal from "@/components/Reveal";

const flow = [
  { step: "01", label: "エントリー", body: "当サイトのフォーム、または各求人媒体より。" },
  { step: "02", label: "書類選考", body: "履歴書・職務経歴書をもとに選考。" },
  { step: "03", label: "1 次面接", body: "現場責任者との個別面接。" },
  { step: "04", label: "最終面接", body: "部署責任者との個別面接。" },
  { step: "05", label: "内定", body: "内定通知を郵送。入社時期は相談に応じます。" },
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
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-gold">FLOW &amp; FAQ</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            選考フロー &amp; よくある質問
          </h2>
        </Reveal>

        <ol className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-3">
          {flow.map((f, i) => (
            <Reveal
              key={f.step}
              delay={i * 100}
              as="li"
              className="card-hover group  bg-gradient-to-br from-white to-sand/40 border border-navy/10 p-3 md:p-5 relative"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xl font-bold text-gold/40 leading-none">
                  {f.step}
                </span>
                <span className="h-px flex-1 bg-navy/10 group-hover:bg-gold/40 transition-colors" />
              </div>
              <p className="mt-3 font-sans font-bold text-navy">{f.label}</p>
              <p className="mt-2 text-xs text-black/65 leading-relaxed">
                {f.body}
              </p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-16 max-w-3xl mx-auto space-y-3">
          {faqs.map((item, i) => (
            <Reveal
              key={item.q}
              delay={i * 60}
              as="div"
              className="bg-sand/40  border border-navy/10 transition-all hover:border-gold/40"
            >
              <details className="group px-6 py-5">
                <summary className="cursor-pointer list-none flex justify-between items-center text-navy font-bold gap-4">
                  <span className="flex-1">{item.q}</span>
                  <span className="w-7 h-7 rounded-full bg-gold/10 grid place-items-center text-gold group-open:rotate-45 group-open:bg-gold group-open:text-white transition-all flex-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm text-black/70 leading-relaxed pr-10">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
