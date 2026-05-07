const faqs = [
  {
    q: "面接前にカジュアル面談はできますか？",
    a: "可能です。エントリーフォームに「カジュアル面談希望」とお書きください。オンライン30分から対応します。",
  },
  {
    q: "現在の年収から下がりませんか？",
    a: "原則、現年収を下回らない条件提示を心がけています。スキル・経験を踏まえ、個別にオファーします。",
  },
  {
    q: "選考フローを教えてください。",
    a: "書類→現場見学を兼ねた一次面接→技術面談（40分）→役員面談、の3ステップ。約3〜4週間で内定までいきます。",
  },
  {
    q: "入社後すぐに案件リードを任されますか？",
    a: "経験者の場合、3ヶ月のオンボーディング期間を設けたうえで段階的にお任せします。希望と適性に応じて柔軟に調整します。",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-sand">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-gold text-center">FAQ</p>
        <h2 className="mt-3 font-sans font-bold text-3xl text-navy text-center">
          よくある質問
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group bg-white rounded-xl border border-navy/10 px-6 py-5"
            >
              <summary className="cursor-pointer list-none flex justify-between items-center text-navy font-bold">
                {item.q}
                <span className="text-gold group-open:rotate-45 transition">
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
