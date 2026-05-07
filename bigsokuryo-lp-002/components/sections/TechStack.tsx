import Reveal from "@/components/Reveal";

const stack = [
  {
    cat: "特許技術",
    items: [
      "1ミクロン (0.001mm) 高精度測量",
      "構造物上の基準点測量方法及びシステム",
    ],
    accent: true,
  },
  {
    cat: "トータルステーション (55台)",
    items: [
      "SOKKIA ix1001 / ix503",
      "SOKKIA FX101 / FX103",
      "Leica TS09",
    ],
  },
  {
    cat: "レベル (55台)",
    items: ["DiNi 0.3", "SDL1X / SDL30", "PL1 / B20"],
  },
  {
    cat: "GNSS (5台)",
    items: ["Trimble R10", "Trimble R9"],
  },
  {
    cat: "3Dレーザースキャナ",
    items: ["Leica SCAN STATION P50 ほか"],
  },
  {
    cat: "レーザートラッカー",
    items: ["大型部品測定", "精密アライメント"],
  },
  {
    cat: "MONMOS / 鉛直器",
    items: ["NET1AXIIT / NET05X / NET1200", "FG-L100 / PD3"],
  },
  {
    cat: "UAV / 写真測量",
    items: ["DJI Phantom3 pro", "オルソモザイク生成"],
  },
  {
    cat: "ソフトウェア",
    items: [
      "Autodesk Infrastructure Design Suite",
      "Pix4Dmapper",
      "3DCG ビジュアライズ",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="work" className="py-28 bg-sand relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-navy/5 blur-3xl"
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-gold">TECH STACK</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            技術が、技術で語れる環境。
          </h2>
          <p className="mt-5 text-navy/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            特許取得の高精度測量から最新の 3D 計測まで、全て自社保有。
            鉄道・道路・トンネル・空港の重要インフラ現場で、本物の機材と本物の案件に向き合えます。
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {stack.map((s, i) => (
            <Reveal
              key={s.cat}
              delay={i * 70}
              className={`card-hover group bg-white  p-6 border ${
                s.accent
                  ? "border-gold/40 bg-gradient-to-br from-white to-amber-50"
                  : "border-navy/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <p
                  className={`text-xs tracking-widest ${
                    s.accent ? "text-amber-600 font-bold" : "text-gold"
                  }`}
                >
                  {s.cat}
                </p>
                {s.accent && (
                  <span className="text-[10px] tracking-widest bg-gold text-navy font-bold px-2 py-0.5 ">
                    PATENT
                  </span>
                )}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-navy/85">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-none transition-transform group-hover:scale-150" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300} className="mt-12 text-center">
          <p className="text-xs tracking-widest text-navy/50">
            測量業者登録 国土交通大臣登録 一般 第 (9)-14858 号
          </p>
        </Reveal>
      </div>
    </section>
  );
}
