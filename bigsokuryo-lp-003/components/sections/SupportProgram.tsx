const programs = [
  {
    step: "STEP 01",
    title: "入社・基礎研修",
    body: "器械研修や社内勉強会（年2回）で測量の基礎から学べます。作業着・電卓・事務用品はすべて会社から貸与。地方出身の方には単身用社員寮（1R・月3万円）を用意しています。",
  },
  {
    step: "STEP 02",
    title: "現場OJT",
    body: "先輩との同行から始まり、少しずつ任される範囲を広げていきます。「不器用でも前に進む人を育てたい」という採用方針通り、急かさずじっくり育成。文系・未経験から測量士になった先輩が、現場の中心にいます。",
  },
  {
    step: "STEP 03",
    title: "資格取得サポート",
    body: "測量士・測量士補の試験費用は合格時に会社負担。資格手当も月額で支給（測量士1.5万円／技術士10万円 など）。学びを評価し、長く積み上げる仕組みです。",
  },
  {
    step: "STEP 04",
    title: "暮らしと家族の支援",
    body: "住宅手当（持ち家2万円／借家1.5万円）、家族手当（配偶者5千円・子1万円）、保養所（新潟・湯沢）、産休・育休制度。ライフステージが変わっても続けられる環境です。",
  },
];

export default function SupportProgram() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-emerald-700 text-center">
          GROWTH JOURNEY
        </p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
          一人にしない、4ステップ。
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
