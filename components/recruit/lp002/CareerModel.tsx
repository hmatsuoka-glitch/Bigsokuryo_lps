const tracks = [
  {
    role: "プロジェクトマネージャー",
    salary: "650〜780万円",
    body: "公共・民間プロジェクトの責任者として、計画から納品までをリード。事業所長候補。",
    skills: ["案件マネジメント", "顧客折衝", "原価管理"],
  },
  {
    role: "テクニカルスペシャリスト",
    salary: "550〜720万円",
    body: "3D計測・点群処理・BIM/CIMなど、専門領域のエキスパートとして社内外の難所を解く。",
    skills: ["UAVレーザー", "点群解析", "BIM/CIM"],
  },
  {
    role: "土地家屋調査士／登記担当",
    salary: "500〜680万円",
    body: "境界確定・登記手続を担当。法務局対応や境界紛争の調整までを一気通貫で。",
    skills: ["境界確定", "表示登記", "民法実務"],
  },
];

export default function CareerModel() {
  return (
    <section id="career" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-gold text-center">
          CAREER MODEL
        </p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
          3つのキャリアトラック
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <article
              key={t.role}
              className="rounded-2xl border border-navy/10 p-7 bg-gradient-to-b from-white to-sand"
            >
              <h3 className="font-serif text-xl text-navy">{t.role}</h3>
              <p className="mt-2 text-gold text-sm font-bold tracking-wide">
                想定年収 {t.salary}
              </p>
              <p className="mt-4 text-sm text-navy/75 leading-relaxed">
                {t.body}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {t.skills.map((s) => (
                  <li
                    key={s}
                    className="text-[11px] tracking-widest border border-navy/20 px-2.5 py-1 rounded-full text-navy/70"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
