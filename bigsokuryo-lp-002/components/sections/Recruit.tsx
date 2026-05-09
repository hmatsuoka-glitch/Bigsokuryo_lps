import Reveal from "@/components/Reveal";

const flow = [
  { no: "01", label: "エントリー", body: "本サイトのフォームまたは saiyou@bigsdc.co.jp へ連絡。" },
  { no: "02", label: "書類選考", body: "履歴書・職務経歴書をもとに選考します。" },
  { no: "03", label: "1 次面接", body: "現場責任者との個別面接。技術と現場のフィットを確認。" },
  { no: "04", label: "最終面接", body: "部署責任者との個別面接。配属領域も相談します。" },
  { no: "05", label: "内定", body: "内定通知を郵送。入社時期は柔軟に相談に応じます。" },
];

const summary = [
  { k: "募集職種", v: "測量アシスタント (経験者・正社員)" },
  { k: "勤務地", v: "東京都台東区東上野 1-26-8 / JR 御徒町駅 徒歩 4 分" },
  {
    k: "勤務時間",
    v: "8:00 - 17:00 (実働 8h / 休憩 60 分) ※鉄道夜勤 20:00 - 翌 5:00",
  },
  { k: "月給", v: "21 万円以上 (前職・経験考慮 / 試用期間 3 ヶ月)" },
  { k: "賞与", v: "年 2 回 (計 2 ヶ月分) / 昇給 年 1 回 (4 月)" },
  { k: "休日", v: "完全週休 2 日 (土・日・祝) / 夏季 / 年末年始 / GW" },
  { k: "保険", v: "健康・厚生年金・雇用・労災" },
  { k: "選考方法", v: "書類選考 → 1 次面接 → 最終面接" },
  { k: "応募資格", v: "高校・専門・大学 既卒者 (経験者優遇)" },
  { k: "採用窓口", v: "人事部 須藤 翠 / saiyou@bigsdc.co.jp" },
];

export default function Recruit() {
  return (
    <section
      id="recruit"
      className="py-20 md:py-28 bg-sand relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold">RECRUIT</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            募集要項
          </h2>
          <p className="mt-5 text-sm md:text-base text-navy/70 max-w-2xl leading-relaxed">
            経験者・中途採用 (測量アシスタント / 正社員)。
            入社時期はご事情に合わせて柔軟に相談に応じます。
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 md:mt-16">
          <div className="bg-white border border-navy/10 p-6 md:p-10">
            <div className="flex items-baseline justify-between flex-wrap gap-3 pb-5 mb-2 border-b border-navy/15">
              <p className="text-xs tracking-[0.4em] text-gold">REQUIREMENTS</p>
              <p className="text-[11px] text-navy/55">中途・正社員</p>
            </div>
            <dl className="divide-y divide-navy/10">
              {summary.map((item) => (
                <div
                  key={item.k}
                  className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 py-4 md:py-5"
                >
                  <dt className="md:col-span-1 text-sm md:text-[15px] font-bold text-navy">
                    {item.k}
                  </dt>
                  <dd className="md:col-span-3 text-sm md:text-[15px] text-navy/85 leading-relaxed">
                    {item.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-12 md:mt-16">
          <div className="flex items-baseline gap-4 mb-6">
            <p className="text-xs tracking-[0.4em] text-gold">SELECTION FLOW</p>
            <span aria-hidden className="h-px flex-1 bg-navy/15" />
          </div>
          <ol className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {flow.map((f, i) => (
              <Reveal
                key={f.no}
                delay={i * 80}
                as="li"
                className="card-hover group bg-white border border-navy/10 p-4 md:p-5 relative"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xl font-bold text-brand">
                    {f.no}
                  </span>
                  <span
                    aria-hidden
                    className="h-px flex-1 bg-navy/15 group-hover:bg-brand/60 transition-colors"
                  />
                </div>
                <p className="mt-3 font-sans font-bold text-navy text-sm md:text-base">
                  {f.label}
                </p>
                <p className="mt-2 text-xs text-navy/65 leading-relaxed">
                  {f.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
