import TextReveal from "@/components/TextReveal";

const projects = [
  {
    tag: "PUBLIC / OLYMPIC",
    title: "海の森水上競技場 地形測量",
    year: "2020 東京オリンピック・パラリンピック",
    photo: "/site-photo.jpg",
  },
  {
    tag: "HISTORIC RESTORATION",
    title: "東京駅 丸の内駅舎 復原工事",
    year: "戦前創建当時の姿への復原",
    photo: "/works_img.jpg",
  },
  {
    tag: "RAILWAY / 高難度",
    title: "東京メトロ銀座線 渋谷駅 移設工事",
    year: "ホーム 130m 表参道側へ移設",
    photo: "/DSC_0760%202.jpg",
  },
  {
    tag: "PLANNING / CONTENT",
    title: "工事展示室の企画・制作",
    year: "受注からオープンまで 3 ヶ月",
    photo: "/top-img.JPG",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="md:col-span-7">
            <p className="font-display font-semibold text-xs md:text-sm tracking-widest text-brand">
              [ Projects ]
            </p>
            <h2 className="mt-3 font-display font-extrabold text-[56px] md:text-[96px] lg:text-[105px] leading-[0.95] tracking-tight text-brand-deep">
              Projects
            </h2>
            <p className="mt-3 font-sans font-bold text-lg md:text-2xl tracking-wide text-ink">
              東京の、誰もが知る現場で。
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm md:text-base text-sub leading-[2]">
              歴史的建造物から国際スポーツ大会、地下鉄の大規模移設まで。
              ビッグ測量設計の社名が刻まれる現場をご紹介します。
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((p, i) => (
            <TextReveal key={p.title} delay={i * 100}>
              <article className="group cursor-default">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-soft">
                  <img
                    src={p.photo}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 font-display font-bold text-[11px] md:text-xs tracking-[0.3em] text-brand">
                  {p.tag}
                </p>
                <h3 className="mt-2 font-sans font-extrabold text-xl md:text-3xl text-brand-deep leading-tight group-hover:underline underline-offset-4 decoration-2">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-sub">{p.year}</p>
              </article>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
