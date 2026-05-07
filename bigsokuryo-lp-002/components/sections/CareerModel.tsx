const tracks = [
  {
    role: "鉄道工事測量スペシャリスト",
    body: "線路閉鎖作業・営業線近接作業など、ミリ単位の精度と安全管理が同時に問われる鉄道現場をリード。JR各社・東鉄工業・鉄建建設等のプロジェクトに直接関わります。",
    skills: ["鉄道測量", "線路閉鎖", "工事管理者"],
  },
  {
    role: "3D 計測 / 点群解析エンジニア",
    body: "3Dレーザースキャナ・写真測量・オルソモザイクで取得した点群データから 3DCG までを一貫処理。文化財調査・駅構内支障物調査などの先進案件を担当。",
    skills: ["3Dスキャナ", "点群処理", "Pix4D", "3DCG"],
  },
  {
    role: "工事測量プロジェクトマネージャー",
    body: "公共測量・大手ゼネコン案件の主担当として、計画立案から成果品納品・原価管理まで統括。職務手当 (主任〜課長) でポジションが正当に報われます。",
    skills: ["公共測量", "案件統括", "顧客折衝", "原価管理"],
  },
];

const salaryTrack = [
  { y: "1年目", v: "390万円" },
  { y: "2年目", v: "470万円" },
  { y: "3年目", v: "500万円" },
  { y: "5年目", v: "520万円" },
];

export default function CareerModel() {
  return (
    <section id="career" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-gold text-center">
          CAREER MODEL
        </p>
        <h2 className="mt-3 font-sans font-bold text-3xl md:text-4xl text-navy text-center">
          3 つのキャリアトラック
        </h2>
        <p className="mt-4 text-center text-navy/70 text-sm max-w-xl mx-auto">
          経験と志向に合わせて、入社時に主担当領域を相談します。
          領域横断のキャリアチェンジも歓迎。
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <article
              key={t.role}
              className="rounded-2xl border border-navy/10 p-7 bg-gradient-to-b from-white to-sand"
            >
              <h3 className="font-sans font-bold text-xl text-navy">{t.role}</h3>
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

        <div className="mt-16 rounded-2xl border border-navy/10 bg-sand p-8">
          <p className="text-xs tracking-widest text-gold">
            SALARY TRACK / 30 歳経験者の年収実績
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {salaryTrack.map((s) => (
              <div
                key={s.y}
                className="bg-white rounded-xl p-5 border border-navy/10 text-center"
              >
                <p className="text-xs tracking-widest text-navy/60">{s.y}</p>
                <p className="mt-2 text-2xl font-bold text-navy">{s.v}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-navy/60 leading-relaxed">
            ※ 30 歳・経験者として入社した社員の実績例。月給は前職・経験を考慮したうえで個別オファー (試用期間 3 ヶ月)。
            職務手当 (主任 1 万 / 係長 2 万 / 課長補佐 3 万 / 課長 10 万) と資格手当 (技術士 月 10 万 / 測量士 月 1.5 万 ほか) が別途加算されます。
          </p>
        </div>
      </div>
    </section>
  );
}
