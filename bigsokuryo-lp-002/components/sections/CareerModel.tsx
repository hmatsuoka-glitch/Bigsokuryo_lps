import AnimatedNumber from "@/components/AnimatedNumber";
import Reveal from "@/components/Reveal";

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
  { y: "1年目", v: 390 },
  { y: "2年目", v: 470 },
  { y: "3年目", v: 500 },
  { y: "5年目", v: 520 },
];

export default function CareerModel() {
  return (
    <section id="career" className="py-28 bg-sand relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-gold">CAREER MODEL</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            3 つのキャリアトラック
          </h2>
          <p className="mt-5 text-center text-black/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            経験と志向に合わせて、入社時に主担当領域を相談します。
            領域横断のキャリアチェンジも歓迎。
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {tracks.map((t, i) => (
            <Reveal
              key={t.role}
              delay={i * 120}
              as="article"
              className="card-hover group  border border-navy/10 p-4 md:p-7 bg-white relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-amber-400 to-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
              />
              <div className="flex items-start gap-3">
                <span className="font-mono text-3xl font-bold text-gold/40 leading-none">
                  0{i + 1}
                </span>
                <h3 className="font-sans font-bold text-xl text-navy leading-snug">
                  {t.role}
                </h3>
              </div>
              <p className="mt-5 text-sm text-black/75 leading-relaxed">
                {t.body}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {t.skills.map((s) => (
                  <li
                    key={s}
                    className="text-[11px] tracking-widest border border-navy/20 px-2.5 py-1 rounded-full text-black/70 transition-all hover:border-gold hover:text-navy hover:bg-sand"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={200}
          className="mt-16  border border-navy/10 bg-white p-7 md:p-10 shadow-sm"
        >
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
            <p className="text-xs tracking-widest text-gold">
              SALARY TRACK / 30 歳経験者の年収実績
            </p>
            <p className="text-[11px] text-black/50 tracking-wider">
              UNIT: 万円 / YEAR
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {salaryTrack.map((s, i) => (
              <Reveal
                key={s.y}
                delay={i * 150}
                className="bg-gradient-to-br from-sand to-white  p-5 border border-navy/10 text-center card-hover"
              >
                <p className="text-xs tracking-widest text-black/60">{s.y}</p>
                <p className="mt-3 text-3xl md:text-4xl font-bold text-navy tracking-tight">
                  <AnimatedNumber end={s.v} duration={1600 + i * 200} />
                  <span className="text-sm ml-1 text-gold">万</span>
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-7 text-xs md:text-sm text-black/65 leading-relaxed">
            ※ 30 歳・経験者として入社した社員の実績例。月給は前職・経験を考慮したうえで個別オファー (試用期間 3 ヶ月)。
            職務手当 (主任 1 万 / 係長 2 万 / 課長補佐 3 万 / 課長 10 万) と
            資格手当 (技術士 月 10 万 / 測量士 月 1.5 万 ほか) が別途加算されます。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
