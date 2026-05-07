const faqs = [
  {
    q: "未経験でも応募できますか？",
    a: "可能です。実際にIターンで未経験から始めて、3年で資格を取得した社員もいます。研修・資格支援は手厚く整えています。",
  },
  {
    q: "家族帯同での移住でも支援を受けられますか？",
    a: "もちろんです。配偶者の就労支援や、お子様の保育園・転校手続きまで人事担当が伴走します。",
  },
  {
    q: "現地ツアーの交通費はどうなりますか？",
    a: "選考プロセスに含まれる現地ツアーの往復交通費は会社が全額負担します。宿泊が必要な場合の費用も支給します。",
  },
  {
    q: "都市部のクライアントの仕事にも関われますか？",
    a: "はい。広域案件や中央省庁関連のプロジェクトに参画する機会もあり、必要に応じて出張ベースで対応します。",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-emerald-50">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-emerald-700 text-center">
          FAQ
        </p>
        <h2 className="mt-3 font-serif text-3xl text-navy text-center">
          よくある質問
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group bg-white rounded-xl border border-emerald-700/20 px-6 py-5"
            >
              <summary className="cursor-pointer list-none flex justify-between items-center text-navy font-bold">
                {item.q}
                <span className="text-emerald-700 group-open:rotate-45 transition">
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
