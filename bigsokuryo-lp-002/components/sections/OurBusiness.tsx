import Reveal from "@/components/Reveal";

const services = [
  {
    no: "01",
    title: "測量",
    sub: "SURVEYING",
    body: "公共測量・工事測量・調査測量。鉄道工事測量を起点に、線路閉鎖や営業線近接など高難度の現場を支えます。",
    tags: ["公共測量", "工事測量", "鉄道測量", "3D 計測"],
  },
  {
    no: "02",
    title: "設計",
    sub: "DESIGN",
    body: "各種設計から CG までを内製。点群データから 3DCG ビジュアライズまで、構造物の完成イメージを可視化します。",
    tags: ["土木設計", "3DCG", "オルソモザイク"],
  },
  {
    no: "03",
    title: "施工管理",
    sub: "CONSTRUCTION MGMT.",
    body: "出来形・品質・工程の三本柱で現場をマネジメント。発注者・施工者の両側を理解した提案ができます。",
    tags: ["出来形管理", "品質管理", "工程管理"],
  },
  {
    no: "04",
    title: "企画",
    sub: "PLANNING",
    body: "技術提案・営業支援・コンテンツ制作まで対応。「工事展示室」など、工事と地域を結ぶプロジェクトも企画段階から伴走します。",
    tags: ["技術提案", "営業支援", "コンテンツ制作"],
  },
  {
    no: "05",
    title: "システム開発",
    sub: "SYSTEMS",
    body: "社内ツール、社外向けシステム、パッケージ製品まで開発。測量と IT の両輪で、業務効率と品質を継続的に底上げします。",
    tags: ["社内システム", "パッケージ開発"],
  },
];

export default function OurBusiness() {
  return (
    <section
      id="business"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-brand/5 blur-3xl"
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold">OUR BUSINESS</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            事業内容
          </h2>
          <p className="mt-5 text-sm md:text-base text-navy/70 max-w-2xl leading-relaxed">
            測量を軸に、設計・施工管理・企画・システム開発まで。
            鉄道・道路・トンネル・空港 ―― 東京の重要インフラ整備を、
            5 つの事業領域で一気通貫に支えます。
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {services.map((s, i) => (
            <Reveal
              key={s.no}
              delay={i * 80}
              as="article"
              className="card-hover group bg-white border border-navy/10 p-5 md:p-7 relative flex flex-col"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-2xl md:text-3xl font-bold text-brand/30">
                  {s.no}
                </span>
                <span className="text-[10px] tracking-[0.3em] text-gold">
                  {s.sub}
                </span>
              </div>
              <h3 className="mt-3 font-sans font-bold text-2xl text-navy">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-navy/75 leading-relaxed flex-1">
                {s.body}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="text-[10px] tracking-widest border border-navy/15 px-2 py-1 text-navy/65"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
