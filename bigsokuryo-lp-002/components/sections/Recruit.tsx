import Reveal from "@/components/Reveal";

const salaryTrack = [
  { y: "1 年目", v: "390 万" },
  { y: "2 年目", v: "470 万" },
  { y: "3 年目", v: "500 万" },
  { y: "5 年目", v: "520 万" },
];

const summary = [
  { k: "募集職種", v: "測量アシスタント (未経験 OK・正社員)" },
  { k: "応募資格", v: "未経験歓迎 / 学歴不問 / 人柄重視 (高校・専門・大学 既卒者)" },
  { k: "勤務地", v: "東京都台東区東上野 1-26-8 / JR 御徒町駅 徒歩 4 分" },
  {
    k: "勤務時間",
    v: "8:00 - 17:00 (実働 8h / 休憩 60 分) / 鉄道夜勤 20:00 - 翌 5:00 ※夜勤は短縮労働もあります",
  },
  { k: "月給", v: "21 万円以上 (前職・経験考慮 / 試用期間 3 ヶ月)" },
  { k: "賞与", v: "年 2 回 (計 2 ヶ月分) / 昇給 年 1 回 (4 月)" },
  { k: "休日", v: "週休 2 日 (土・日・祝) / 夏季 / 年末年始 / GW" },
  { k: "保険", v: "健康・厚生年金・雇用・労災" },
  { k: "採用窓口", v: "採用担当 / 公式 LINE よりご連絡ください" },
];

export default function Recruit() {
  return (
    <section id="recruit" className="py-20 md:py-28 bg-white">
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-brand">RECRUIT</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            募集要項
          </h2>
          <p className="mt-5 text-sm md:text-base text-black/70 max-w-2xl leading-relaxed">
            経験者・中途採用 (測量アシスタント / 正社員)。
            入社時期はご事情に合わせて柔軟に相談に応じます。
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10 md:mt-14">
          <div className="bg-navy text-white p-8 md:p-12">
            <p className="text-[10px] md:text-xs tracking-[0.4em] text-brand">
              SALARY TRACK
            </p>
            <h3 className="mt-3 font-sans font-bold text-2xl md:text-3xl tracking-tight">
              30 歳 経験者 年収実績
            </h3>
            <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {salaryTrack.map((s) => (
                <li
                  key={s.y}
                  className="flex flex-col border-l-2 border-brand pl-4 md:pl-5"
                >
                  <span className="text-[11px] md:text-xs tracking-widest text-white/60">
                    {s.y}
                  </span>
                  <span className="mt-2 font-sans font-bold text-2xl md:text-4xl tracking-tight">
                    {s.v}
                    <span className="ml-1 text-sm md:text-base font-normal text-white/70">
                      円
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={250} className="mt-10 md:mt-14">
          <div className="border border-navy/10">
            <div className="flex items-baseline justify-between flex-wrap gap-3 px-6 md:px-10 pt-6 pb-4 border-b border-navy/15">
              <p className="text-xs tracking-[0.4em] text-brand">REQUIREMENTS</p>
              <p className="text-[11px] text-black/55">中途・正社員</p>
            </div>
            <dl>
              {summary.map((item, i) => (
                <div
                  key={item.k}
                  className={`grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 px-6 md:px-10 py-4 md:py-5 ${
                    i % 2 === 0 ? "bg-white" : "bg-sand/30"
                  }`}
                >
                  <dt className="md:col-span-1 text-sm md:text-[15px] font-bold text-navy">
                    {item.k}
                  </dt>
                  <dd className="md:col-span-3 text-sm md:text-[15px] text-black/85 leading-relaxed">
                    {item.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
