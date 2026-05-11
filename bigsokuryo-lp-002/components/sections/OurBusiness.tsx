import Reveal from "@/components/Reveal";

const blocks = [
  {
    no: "01",
    eyebrow: "SURVEYING",
    title: "測量",
    body: "公共・工事・調査測量。鉄道工事測量を起点に、線路閉鎖や営業線近接など他社が踏み込めない高難度の現場を支えます。特許取得の 1 ミクロン高精度測量を含む全機材を自社保有。",
    bg: "/message_img.jpg",
  },
  {
    no: "02",
    eyebrow: "DESIGN & BIM",
    title: "設計・3D 化",
    body: "各種土木設計、3D レーザースキャナや写真測量で取得した点群データから 3DCG ビジュアライズまで一気通貫で内製。文化財調査・駅構内支障物調査などの先進案件にも対応。",
    bg: null,
  },
  {
    no: "03",
    eyebrow: "CONSTRUCTION MGMT.",
    title: "施工管理・企画・システム開発",
    body: "出来形・品質・工程の三本柱で現場管理。技術提案・営業支援・コンテンツ制作、社内 / 社外システム / パッケージ開発まで対応する総合力が、ビッグ測量設計の特徴です。",
    bg: null,
  },
];

export default function OurBusiness() {
  return (
    <section
      id="business"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold">OUR BUSINESS</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            事業内容
          </h2>
          <p className="mt-5 text-sm md:text-base text-black/70 max-w-2xl leading-relaxed">
            測量を軸に、設計・施工管理・企画・システム開発まで。
            東京の重要インフラ整備を、5 つの事業領域で一気通貫に支えます。
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 space-y-4 md:space-y-6">
          {blocks.map((b, i) => (
            <Reveal key={b.no} delay={i * 100}>
              <article className="card-hover group bg-sand/50 border border-navy/10 grid md:grid-cols-12 overflow-hidden">
                <div className="md:col-span-5 relative bg-brand">
                  <div className="aspect-[16/10] md:aspect-auto md:h-full relative overflow-hidden">
                    {b.bg ? (
                      <img
                        src={b.bg}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-dark" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 md:bottom-6 md:left-7 text-white">
                      <p className="font-mono text-3xl md:text-5xl font-bold leading-none text-gold">
                        {b.no}
                      </p>
                      <p className="mt-2 text-[10px] md:text-xs tracking-[0.3em] text-white/85">
                        {b.eyebrow}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="font-sans font-bold text-2xl md:text-3xl text-navy leading-tight">
                    {b.title}
                  </h3>
                  <p className="mt-4 md:mt-5 text-sm md:text-base text-black/75 leading-relaxed">
                    {b.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
