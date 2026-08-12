import TextReveal from "@/components/TextReveal";

const steps = [
  { time: "7:30", label: "出勤", body: "本社または現場集合場所へ。" },
  { time: "8:00", label: "現場へ出発", body: "機材を積み込み、班体制で現場へ移動。" },
  { time: "10:15", label: "午前休憩", body: "短い水分補給・体調確認。安全第一で。" },
  { time: "10:30", label: "作業再開", body: "観測・計測を継続。" },
  { time: "12:00", label: "昼食", body: "現場近くで昼休憩。" },
  { time: "13:00", label: "午後の作業", body: "午前の続きの計測やデータ取得。" },
  { time: "15:00", label: "午後休憩", body: "小休止で集中力をリセット。" },
  { time: "15:15", label: "作業再開", body: "残作業と仕上げ観測。" },
  { time: "18:00", label: "まとめ", body: "観測データの整理・翌日の段取り。" },
];

const benefits = [
  { k: "週休 2 日", v: "土・日・祝 / 夏季 / 年末年始 / GW" },
  { k: "資格費用 会社全額負担", v: "測量士・測量士補 試験費用サポート" },
  { k: "賞与 年 2 回", v: "計 2 ヶ月分 / 昇給 年 1 回 (4 月)" },
  { k: "年 3 回の社内勉強会", v: "現場と社内で学びを共有" },
];

export default function WorkFlow() {
  return (
    <section id="environment" className="relative bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div>
          <p className="font-display font-semibold text-xs md:text-sm tracking-widest text-brand">
            [ Environment ]
          </p>
          <h2 className="mt-3 font-display font-extrabold text-[40px] md:text-[80px] leading-[0.95] tracking-tight text-brand-deep whitespace-nowrap">
            Environment
          </h2>
          <p className="mt-3 font-sans font-bold text-base md:text-xl tracking-wide text-ink">
            働く環境を知る
          </p>
        </div>

        {/* 待遇ハイライト (セクション名直下に配置) */}
        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {benefits.map((b, i) => (
            <TextReveal
              key={b.k}
              delay={i * 60}
              className="p-5 md:p-8 border border-brand/25 bg-brand-soft/40"
            >
              <p className="font-sans font-extrabold text-sm md:text-lg text-brand-deep leading-snug">
                {b.k}
              </p>
              <p className="mt-2 md:mt-3 text-xs md:text-sm text-sub leading-relaxed">
                {b.v}
              </p>
            </TextReveal>
          ))}
        </div>

        {/* 1 日の流れ */}
        <div className="mt-14 md:mt-20">
          <p className="font-display font-bold text-xs md:text-sm tracking-widest text-brand">
            DAILY SCHEDULE
          </p>
          <h3 className="mt-2 font-sans font-extrabold text-xl md:text-3xl text-brand-deep">
            1 日の流れ
          </h3>

          <ol className="mt-6 md:mt-8 relative">
            <span
              aria-hidden
              className="hidden md:block absolute left-[56px] top-2 bottom-2 w-px bg-brand/30"
            />
            <div className="divide-y divide-black/10 border-y border-black/10">
              {steps.map((s, i) => (
                <TextReveal
                  key={s.time}
                  delay={i * 30}
                  as="li"
                  className="grid grid-cols-[auto_1fr] md:grid-cols-[110px_1fr] gap-3 md:gap-6 items-baseline py-3 md:py-4"
                >
                  <span className="font-display font-bold text-lg md:text-2xl text-brand leading-none">
                    {s.time}
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-sans font-extrabold text-sm md:text-base text-brand-deep leading-snug">
                      {s.label}
                    </h4>
                    <p className="mt-0.5 md:mt-1 text-xs md:text-sm text-sub leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </TextReveal>
              ))}
            </div>
          </ol>
        </div>
      </div>
    </section>
  );
}
