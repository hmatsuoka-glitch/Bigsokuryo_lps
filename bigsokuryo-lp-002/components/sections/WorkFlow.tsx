import Reveal from "@/components/Reveal";

const steps = [
  { time: "7:30", label: "出勤", body: "本社または現場集合場所へ。" },
  { time: "8:00", label: "現場へ出発", body: "機材を積み込み、班体制で現場へ移動。" },
  {
    time: "10:15",
    label: "午前休憩 (小休憩)",
    body: "短い水分補給・体調確認。安全第一で。",
  },
  { time: "10:30", label: "作業再開", body: "観測・計測を継続。" },
  { time: "12:00", label: "昼食", body: "現場近くで昼休憩。" },
  { time: "13:00", label: "午後の作業開始", body: "午前の続きの計測やデータ取得。" },
  { time: "15:00", label: "午後休憩", body: "小休止で集中力をリセット。" },
  { time: "15:15", label: "作業再開", body: "残作業と仕上げ観測を実施。" },
  {
    time: "18:00",
    label: "本日の作業内容のまとめ & 翌日の段取り",
    body: "観測データの整理・引き継ぎ事項の共有、翌日の計画。",
  },
];

export default function WorkFlow() {
  return (
    <section
      id="flow"
      className="py-20 md:py-28 bg-sand/40 relative overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-brand">DAILY SCHEDULE</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            1 日の流れ
          </h2>
          <p className="mt-5 text-sm md:text-base text-black/70 max-w-2xl leading-relaxed">
            出勤から退勤まで、現場で働く 1 日のスケジュール例です。
          </p>
        </Reveal>

        <ol className="mt-12 md:mt-16 relative">
          <span
            aria-hidden
            className="hidden md:block absolute left-[64px] top-2 bottom-2 w-px bg-navy/15"
          />
          <div className="space-y-3 md:space-y-4">
            {steps.map((s, i) => (
              <Reveal
                key={s.time}
                delay={i * 50}
                as="li"
                className="group relative grid grid-cols-[auto_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-8 items-start bg-white border border-navy/10 p-5 md:p-6"
              >
                <div className="md:flex md:flex-col md:items-start">
                  <span className="font-mono text-2xl md:text-3xl font-bold text-brand leading-none">
                    {s.time}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-sans font-bold text-base md:text-lg text-navy leading-snug">
                    {s.label}
                  </h3>
                  <p className="mt-2 text-sm md:text-[15px] text-black/75 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
