import Reveal from "@/components/Reveal";

const flow = [
  { no: "01", label: "エントリー", body: "本サイトのフォーム、または saiyou@bigsdc.co.jp へご連絡ください。" },
  { no: "02", label: "書類選考", body: "履歴書・職務経歴書をもとに選考します。" },
  { no: "03", label: "1 次面接", body: "現場責任者との個別面接。技術と現場のフィットを確認します。" },
  { no: "04", label: "最終面接", body: "部署責任者との個別面接。配属領域も相談します。" },
  { no: "05", label: "内定", body: "内定通知を郵送。入社時期は柔軟に相談に応じます。" },
];

const summary = [
  { k: "募集職種", v: "測量アシスタント (経験者・正社員)" },
  { k: "応募資格", v: "高校・専門・大学 既卒者 (経験者優遇)" },
  { k: "勤務地", v: "東京都台東区東上野 1-26-8 / JR 御徒町駅 徒歩 4 分" },
  {
    k: "勤務時間",
    v: "8:00 - 17:00 (実働 8h / 休憩 60 分) / 鉄道夜勤 20:00 - 翌 5:00 ※夜勤は短縮労働もあります",
  },
  { k: "月給", v: "21 万円以上 (前職・経験考慮 / 試用期間 3 ヶ月)" },
  { k: "賞与", v: "年 2 回 (計 2 ヶ月分) / 昇給 年 1 回 (4 月)" },
  { k: "休日", v: "週休 2 日 (土・日・祝) / 夏季 / 年末年始 / GW" },
  { k: "保険", v: "健康・厚生年金・雇用・労災" },
  { k: "採用窓口", v: "人事部 須藤 翠 / saiyou@bigsdc.co.jp" },
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
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
            {flow.map((f, i) => (
              <li
                key={f.no}
                className="relative bg-brand text-white p-5 md:p-6 flex flex-col"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl md:text-4xl font-bold text-white leading-none">
                    {f.no}
                  </span>
                  <span
                    aria-hidden
                    className="h-px flex-1 bg-white/40"
                  />
                </div>
                <p className="mt-4 font-sans font-bold text-base md:text-lg leading-tight">
                  {f.label}
                </p>
                <p className="mt-3 text-xs md:text-[13px] text-white/85 leading-relaxed">
                  {f.body}
                </p>
                {i < flow.length - 1 && (
                  <>
                    <span
                      aria-hidden
                      className="hidden lg:grid absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white text-brand place-items-center text-sm font-bold shadow"
                    >
                      ›
                    </span>
                    <span
                      aria-hidden
                      className="lg:hidden sm:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white text-brand grid place-items-center text-sm font-bold shadow"
                    >
                      ↓
                    </span>
                  </>
                )}
              </li>
            ))}
          </ol>
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
