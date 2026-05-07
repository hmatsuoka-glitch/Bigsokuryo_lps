const stack = [
  { cat: "計測機器", items: ["Leica TS16", "Topcon GT-1200", "Trimble SX12"] },
  { cat: "UAV / MMS", items: ["DJI M350 RTK", "Matrice 30T", "MMS車両2台"] },
  { cat: "3Dスキャナ", items: ["FARO Focus", "Leica RTC360"] },
  { cat: "ソフトウェア", items: ["Civil 3D", "TREND-ONE", "Cyclone Register 360"] },
  { cat: "BIM/CIM", items: ["Infraworks", "Navisworks", "Revit"] },
  { cat: "クラウド", items: ["BIMcloud", "Box", "kintone"] },
];

export default function TechStack() {
  return (
    <section id="work" className="py-24 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-gold text-center">
          TECH STACK
        </p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
          技術者が、技術で語れる環境。
        </h2>
        <p className="mt-4 text-center text-navy/70 text-sm max-w-xl mx-auto">
          自社保有のハード・ソフトに加え、年1人あたり平均12万円の技術投資予算を確保しています。
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
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
