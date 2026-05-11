import Reveal from "@/components/Reveal";

const steps = [
  {
    no: "01",
    label: "ヒアリング・現地調査",
    body: "発注者との打ち合わせと現場確認。鉄道・道路など現場特性に合わせた段取りを組みます。",
  },
  {
    no: "02",
    label: "計測計画立案",
    body: "基準点配置・使用機材・班体制を設計。安全管理計画 (線路閉鎖・近接作業) もここで確定。",
  },
  {
    no: "03",
    label: "現地測量・データ取得",
    body: "トータルステーション・GNSS・3D レーザースキャナ等で観測。1 ミクロン精度が求められる箇所も自社技術で対応。",
  },
  {
    no: "04",
    label: "解析・図面化",
    body: "点群処理、写真測量解析、3DCG 化までを内製。CAD 図・成果品を作成します。",
  },
  {
    no: "05",
    label: "成果品納品",
    body: "発注者へ成果品を提出。「ビッグ測量設計」社名が成果に明記されます。",
  },
  {
    no: "06",
    label: "アフターサポート",
    body: "工事完了後の追加観測や、変更設計に伴う再測量まで継続的にサポートします。",
  },
];

export default function WorkFlow() {
  return (
    <section
      id="flow"
      className="py-20 md:py-28 bg-sand/40 relative overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold">WORK FLOW</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            仕事の流れ
          </h2>
          <p className="mt-5 text-sm md:text-base text-black/70 max-w-2xl leading-relaxed">
            ヒアリングから納品・アフターサポートまで、6 ステップで一気通貫。
          </p>
        </Reveal>

        <ol className="mt-12 md:mt-16 relative">
          <span
            aria-hidden
            className="hidden md:block absolute left-[34px] top-2 bottom-2 w-px bg-navy/15"
          />
          <div className="space-y-3 md:space-y-5">
            {steps.map((s, i) => (
              <Reveal
                key={s.no}
                delay={i * 60}
                as="li"
                className="group relative grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-8 items-start bg-white border border-navy/10 p-5 md:p-7"
              >
                <div className="md:flex md:flex-col md:items-center">
                  <span className="font-mono text-3xl md:text-4xl font-bold text-brand leading-none">
                    {s.no}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-sans font-bold text-lg md:text-xl text-navy leading-snug">
                    {s.label}
                  </h3>
                  <p className="mt-2 md:mt-3 text-sm md:text-[15px] text-black/75 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
