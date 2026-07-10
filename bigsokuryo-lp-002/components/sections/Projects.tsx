import Reveal from "@/components/Reveal";

const projects = [
  {
    tag: "PUBLIC / OLYMPIC",
    title: "海の森水上競技場 地形測量",
    year: "2020 東京オリンピック・パラリンピック",
    body: "ボート・カヌー競技会場建設のための地形測量。基準点・水準・地形測量と埋設物調査を、1 班 3 人 × 3 班体制で土日対応の短期決戦。社名が成果に明記される公共測量の責任を背負った仕事。",
  },
  {
    tag: "HISTORIC RESTORATION",
    title: "東京駅 丸の内駅舎 復原工事",
    year: "戦前創建当時の姿への復原",
    body: "通行人や観光客への配慮を重ねながら、歴史的な建造物の復原を測量で支えました。「歴史的瞬間に携われた」と社員が誇りに語る案件のひとつ。",
  },
  {
    tag: "RAILWAY / 高難度",
    title: "東京メトロ銀座線 渋谷駅 移設工事",
    year: "ホーム 130m 表参道側へ移設",
    body: "明治通りをまたぐホーム移設に伴う基準点・水準点設置と現状図面化。線路敷設は数ミリのズレも許されないパズル作業。高さ 10m 以上で器械を覗く緊張の連続。",
  },
  {
    tag: "PLANNING / CONTENT",
    title: "工事展示室の企画・制作",
    year: "受注からオープンまで 3 ヶ月",
    body: "コンペ受注から施工管理・コンテンツ制作までを一気通貫。「気軽に入ってこられる空間」として工事と地域を結ぶ役割を担い、4 年経った今も映像が様々な場面で活用されています。",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/site-photo.jpg')" }}
      />
      <div aria-hidden className="absolute inset-0 bg-white/97" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/85"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-brand">PROJECT STORIES</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            東京の、誰もが知る現場で。
          </h2>
          <p className="mt-5 text-black/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            歴史的建造物から国際スポーツ大会、地下鉄の大規模移設まで。
            ビッグ測量設計の社名が刻まれる現場の一部をご紹介します。
          </p>
        </Reveal>

        <div className="mt-14 flex gap-4 md:gap-8">
          <div className="flex-1 space-y-8 md:space-y-12">
            {[projects[0], projects[1]].map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] md:text-xs tracking-widest text-brand font-bold">
                      {p.tag}
                    </span>
                    <span className="h-px flex-1 bg-brand/30" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl md:text-4xl text-brand leading-[1.25]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-black/70 leading-relaxed">
                    {p.year}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="flex-1 space-y-8 md:space-y-12 mt-16 md:mt-24">
            {[projects[2], projects[3]].map((p, i) => (
              <Reveal key={p.title} delay={(i + 2) * 100}>
                <article>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] md:text-xs tracking-widest text-brand font-bold">
                      {p.tag}
                    </span>
                    <span className="h-px flex-1 bg-brand/30" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl md:text-4xl text-brand leading-[1.25]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-black/70 leading-relaxed">
                    {p.year}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
