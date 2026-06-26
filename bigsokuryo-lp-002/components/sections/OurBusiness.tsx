import Reveal from "@/components/Reveal";

const blocks = [
  {
    no: "01",
    eyebrow: "SURVEYING",
    title: "測量",
    body: "公共・工事・調査測量。鉄道工事測量を起点に、線路閉鎖や営業線近接など他社が踏み込めない高難度の現場を支えます。",
  },
  {
    no: "02",
    eyebrow: "DESIGN & BIM",
    title: "設計・3D 化",
    body: "各種土木設計、3D レーザースキャナや写真測量で取得した点群データから 3DCG ビジュアライズまで一気通貫で内製。文化財調査・駅構内支障物調査などの先進案件にも対応。",
  },
  {
    no: "03",
    eyebrow: "CONSTRUCTION MGMT.",
    title: "施工管理・企画・システム開発",
    body: "出来形・品質・工程の三本柱で現場管理。技術提案・営業支援・コンテンツ制作、社内 / 社外システム / パッケージ開発まで対応する総合力が、ビッグ測量設計の特徴です。",
  },
];

export default function OurBusiness() {
  return (
    <section id="business" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-brand">OUR BUSINESS</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            事業内容
          </h2>
          <p className="mt-5 text-sm md:text-base text-black/70 max-w-2xl leading-relaxed">
            測量を軸に、設計・施工管理・企画・システム開発まで。
            東京の重要インフラ整備を、3 つの事業領域で一気通貫に支えます。
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 md:mt-14">
          <figure className="relative overflow-hidden border border-navy/10">
            <img
              src="/DSC_0760%202.jpg"
              alt="トータルステーションで測量する若手社員"
              className="w-full h-auto block"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent text-white px-5 md:px-7 py-4 md:py-5">
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-white/85">
                ON SITE
              </p>
              <p className="mt-1 font-sans font-bold text-sm md:text-base">
                都心の現場で、ミリ単位の観測を。
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-px bg-navy/15 border border-navy/15">
          {blocks.map((b) => (
            <article
              key={b.no}
              className="bg-white p-7 md:p-9 flex flex-col"
            >
              <p className="font-mono text-4xl md:text-5xl font-bold text-brand leading-none">
                {b.no}
              </p>
              <p className="mt-4 text-[10px] md:text-xs tracking-[0.3em] text-brand">
                {b.eyebrow}
              </p>
              <h3 className="mt-3 font-sans font-bold text-2xl md:text-3xl text-navy leading-tight">
                {b.title}
              </h3>
              <p className="mt-4 text-sm md:text-[15px] text-black/75 leading-relaxed">
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
