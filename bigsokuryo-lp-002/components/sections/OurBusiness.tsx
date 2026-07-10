import TextReveal from "@/components/TextReveal";

const blocks = [
  {
    no: "01",
    eyebrow: "SURVEYING",
    title: "測量",
    body: "公共・工事・調査測量。鉄道工事測量を起点に、線路閉鎖や営業線近接など他社が踏み込めない高難度の現場を支えます。",
    photo: "/DSC_0760%202.jpg",
  },
  {
    no: "02",
    eyebrow: "DESIGN & BIM",
    title: "設計・3D 化",
    body: "各種土木設計、3D レーザースキャナや写真測量で取得した点群データから 3DCG ビジュアライズまで一気通貫で内製。文化財調査・駅構内支障物調査などの先進案件にも対応。",
    photo: "/works_img.jpg",
  },
  {
    no: "03",
    eyebrow: "CONSTRUCTION MGMT.",
    title: "施工管理・企画・システム開発",
    body: "出来形・品質・工程の三本柱で現場管理。技術提案・営業支援・コンテンツ制作、社内 / 社外システム / パッケージ開発まで対応する総合力が、ビッグ測量設計の特徴です。",
    photo: "/site-photo.jpg",
  },
];

export default function OurBusiness() {
  return (
    <section
      id="jobs"
      className="relative py-24 md:py-40 bg-jobs-grad overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="md:col-span-7">
            <p className="font-display font-semibold text-xs md:text-sm tracking-widest text-brand">
              [ Jobs ]
            </p>
            <h2 className="mt-3 font-display font-extrabold text-[56px] md:text-[96px] lg:text-[105px] leading-[0.95] tracking-tight text-brand-deep">
              Jobs
            </h2>
            <p className="mt-3 font-sans font-bold text-lg md:text-2xl tracking-wide text-ink">
              仕事を知る
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm md:text-base text-sub leading-[2]">
              測量を軸に、設計・施工管理・企画・システム開発まで。
              3 つの事業領域で、東京の重要インフラ整備を一気通貫に支えます。
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-24 space-y-8 md:space-y-16">
          {blocks.map((b, i) => (
            <TextReveal key={b.no} delay={i * 100}>
              <article
                className={`relative bg-white shadow-[0_20px_60px_-30px_rgba(11,64,34,0.35)] overflow-hidden grid md:grid-cols-12 ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto md:[direction:ltr]">
                  <img
                    src={b.photo}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-6 relative p-8 md:p-14 md:[direction:ltr]">
                  <span
                    aria-hidden
                    className="absolute top-4 right-6 md:top-8 md:right-10 font-display font-extrabold text-[100px] md:text-[160px] leading-none text-brand-deep/10 select-none"
                  >
                    {b.no}
                  </span>
                  <p className="relative font-display font-bold text-[10px] md:text-xs tracking-[0.3em] text-brand">
                    {b.eyebrow}
                  </p>
                  <h3 className="relative mt-3 font-sans font-extrabold text-2xl md:text-4xl text-brand-deep leading-tight">
                    {b.title}
                  </h3>
                  <p className="relative mt-5 text-sm md:text-[15px] text-sub leading-[2]">
                    {b.body}
                  </p>
                </div>
              </article>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
