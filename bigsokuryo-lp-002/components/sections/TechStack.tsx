const stack = [
  {
    cat: "特許技術",
    items: [
      "1ミクロン (0.001mm) 高精度測量",
      "構造物上の基準点測量方法及びシステム",
    ],
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
    <section id="work" className="py-24 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-gold text-center">
          TECH STACK
        </p>
        <h2 className="mt-3 font-sans font-bold text-3xl md:text-4xl text-navy text-center">
          技術が、技術で語れる環境。
        </h2>
        <p className="mt-4 text-center text-navy/70 text-sm max-w-2xl mx-auto">
          特許取得の高精度測量から最新の 3D 計測まで、全て自社保有。
          鉄道・道路・トンネル・空港の重要インフラ現場で、本物の機材と本物の案件に向き合えます。
        </p>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map((s) => (
            <div
              key={s.cat}
              className="bg-white rounded-2xl p-6 border border-navy/10 hover:border-gold transition"
            >
              <p className="text-xs tracking-widest text-gold">{s.cat}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-navy/85">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-gold flex-none" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs tracking-widest text-navy/50">
          測量業者登録 国土交通大臣登録 一般 第 (9)-14858 号
        </p>
      </div>
    </section>
  );
}
