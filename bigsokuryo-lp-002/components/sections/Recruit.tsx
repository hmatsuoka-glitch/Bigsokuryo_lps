import TextReveal from "@/components/TextReveal";

const flow = [
  { no: "01", label: "公式 LINE 追加" },
  { no: "02", label: "カジュアル面談" },
  { no: "03", label: "面接" },
  { no: "04", label: "最終面接" },
  { no: "05", label: "内定" },
];

const salary = [
  { y: "1 年目", v: 390 },
  { y: "2 年目", v: 470 },
  { y: "3 年目", v: 500 },
  { y: "5 年目", v: 520 },
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

const maxSalary = Math.max(...salary.map((s) => s.v));

export default function Recruit() {
  return (
    <section id="recruit" className="relative bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div>
          <p className="font-display font-bold text-xs md:text-sm tracking-widest text-brand">
            SELECTION FLOW
          </p>
          <h3 className="mt-2 font-sans font-extrabold text-2xl md:text-4xl text-brand-deep">
            選考フロー
          </h3>

          <ol className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
            {flow.map((f, i) => (
              <li
                key={f.no}
                className="relative border border-brand/25 bg-white p-5 md:p-6 flex md:flex-col gap-4 md:gap-0 items-center md:items-start"
              >
                <span className="font-display font-extrabold text-3xl md:text-4xl text-brand leading-none flex-none w-14 md:w-auto">
                  {f.no}
                </span>
                <p className="md:mt-4 font-sans font-extrabold text-base md:text-lg text-brand-deep leading-tight">
                  {f.label}
                </p>
                {i < flow.length - 1 && (
                  <>
                    <span
                      aria-hidden
                      className="hidden md:grid absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-brand text-white place-items-center text-xs font-bold"
                    >
                      ›
                    </span>
                    <span
                      aria-hidden
                      className="md:hidden absolute -bottom-2.5 left-8 z-10 w-5 h-5 rounded-full bg-brand text-white grid place-items-center text-[10px] font-bold"
                    >
                      ↓
                    </span>
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 md:mt-24">
          <p className="font-display font-bold text-xs md:text-sm tracking-widest text-brand">
            SALARY TRACK
          </p>
          <h3 className="mt-2 font-sans font-extrabold text-2xl md:text-4xl text-brand-deep">
            30 歳 経験者 年収実績
          </h3>

          {/* SP: 縦積みステップ表 */}
          <ul className="md:hidden mt-8 divide-y divide-black/10 border-y border-black/10">
            {salary.map((s) => (
              <li
                key={s.y}
                className="flex items-baseline justify-between py-4"
              >
                <span className="font-sans font-bold text-sm text-sub tracking-wide">
                  {s.y}
                </span>
                <span className="font-display font-bold text-brand-deep text-2xl leading-none">
                  {s.v}
                  <span className="ml-1 text-sm font-normal text-sub">
                    万円
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {/* PC: 棒グラフ */}
          <div className="hidden md:grid mt-12 grid-cols-4 gap-6 items-end min-h-[280px]">
            {salary.map((s) => {
              const h = (s.v / maxSalary) * 100;
              return (
                <div key={s.y} className="flex flex-col items-center">
                  <p className="font-display font-bold text-brand-deep text-3xl leading-none">
                    {s.v}
                    <span className="ml-1 text-base font-normal text-sub">
                      万円
                    </span>
                  </p>
                  <div
                    className="mt-3 w-full bg-gradient-to-t from-brand-dark to-brand"
                    style={{ height: `${h * 1.8}px` }}
                    aria-hidden
                  />
                  <p className="mt-3 text-[11px] md:text-sm font-bold text-sub tracking-wide">
                    {s.y}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <p className="font-display font-bold text-xs md:text-sm tracking-widest text-brand">
            REQUIREMENTS
          </p>
          <h3 className="mt-2 font-sans font-extrabold text-2xl md:text-4xl text-brand-deep">
            募集要項
          </h3>

          <dl className="mt-8 border-t border-black/10">
            {summary.map((item) => (
              <div
                key={item.k}
                className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 py-5 md:py-6 border-b border-black/10"
              >
                <dt className="md:col-span-1 text-sm md:text-[15px] font-bold text-brand-deep">
                  {item.k}
                </dt>
                <dd className="md:col-span-3 text-sm md:text-[15px] text-sub leading-relaxed">
                  {item.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
