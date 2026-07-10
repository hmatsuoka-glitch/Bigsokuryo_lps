import LetterPop from "@/components/LetterPop";
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
    <section id="environment" className="relative bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="relative grid md:grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] md:aspect-[4/5] overflow-hidden">
              <img
                src="/works_img.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:-ml-16 md:mt-24 bg-white p-8 md:p-14 shadow-[0_20px_60px_-30px_rgba(11,64,34,0.35)]">
            <p className="font-display font-semibold text-xs md:text-sm tracking-widest text-brand">
              [ Environment ]
            </p>
            <h2 className="mt-3 font-display font-extrabold text-[40px] md:text-[80px] leading-[0.95] tracking-tight text-brand-deep whitespace-nowrap">
              <LetterPop text="Environment" />
            </h2>
            <p className="mt-3 font-sans font-bold text-base md:text-xl tracking-wide text-ink">
              働く環境を知る
            </p>
            <TextReveal
              as="p"
              className="mt-6 text-sm md:text-[15px] text-sub leading-[2]"
            >
              出勤から退勤まで、現場で働く 1 日のスケジュール例です。
              週休 2 日と資格取得サポートで、無理なく長く働ける環境を整えています。
            </TextReveal>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <p className="font-display font-bold text-xs md:text-sm tracking-widest text-brand">
            DAILY SCHEDULE
          </p>
          <h3 className="mt-2 font-sans font-extrabold text-2xl md:text-4xl text-brand-deep">
            1 日の流れ
          </h3>

          <ol className="mt-8 md:mt-12 relative">
            <span
              aria-hidden
              className="hidden md:block absolute left-[68px] top-2 bottom-2 w-px bg-brand/30"
            />
            <div className="space-y-3 md:space-y-4">
              {steps.map((s, i) => (
                <TextReveal
                  key={s.time}
                  delay={i * 40}
                  as="li"
                  className="grid grid-cols-[auto_1fr] md:grid-cols-[130px_1fr] gap-4 md:gap-8 items-start bg-white border-b border-black/10 py-4 md:py-5"
                >
                  <span className="font-display font-bold text-2xl md:text-3xl text-brand leading-none">
                    {s.time}
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-sans font-extrabold text-base md:text-lg text-brand-deep leading-snug">
                      {s.label}
                    </h4>
                    <p className="mt-1 text-sm md:text-[15px] text-sub leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </TextReveal>
              ))}
            </div>
          </ol>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {benefits.map((b, i) => (
            <TextReveal
              key={b.k}
              delay={i * 60}
              className="p-6 md:p-8 border border-brand/25 bg-brand-soft/40"
            >
              <p className="font-sans font-extrabold text-sm md:text-lg text-brand-deep leading-snug">
                {b.k}
              </p>
              <p className="mt-3 text-xs md:text-sm text-sub leading-relaxed">
                {b.v}
              </p>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
