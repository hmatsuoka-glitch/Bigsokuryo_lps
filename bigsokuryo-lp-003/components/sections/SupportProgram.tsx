const programs = [
  {
    step: "STEP 01",
    title: "オンラインで暮らし相談",
    body: "現地メンバーと60分のビデオ通話。エリア・物件・教育などライフ面の不安からヒアリングします。",
  },
  {
    step: "STEP 02",
    title: "現地ツアー（往復交通費全額負担）",
    body: "事業所見学、街歩き、物件下見、提携不動産との面談。1泊2日でしっかり下見できます。",
  },
  {
    step: "STEP 03",
    title: "オファー・移住プラン作成",
    body: "条件提示と並行して、引越・住居・初期費用の支援プランを個別設計します。",
  },
  {
    step: "STEP 04",
    title: "入社後フォロー",
    body: "移住バディが3ヶ月間サポート。地域コミュニティへの参加や行政手続きも一緒に進めます。",
  },
];

export default function SupportProgram() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-emerald-700 text-center">
          SUPPORT PROGRAM
        </p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
          移住を一人にしない、4ステップ。
        </h2>
        <ol className="mt-14 relative border-l-2 border-emerald-700/30 ml-4">
          {programs.map((p) => (
            <li key={p.step} className="pl-8 pb-10 relative">
              <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-emerald-700 ring-4 ring-emerald-50" />
              <p className="text-xs tracking-[0.3em] text-emerald-700">
                {p.step}
              </p>
              <h3 className="mt-2 font-serif text-xl text-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-navy/70 leading-relaxed max-w-xl">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
