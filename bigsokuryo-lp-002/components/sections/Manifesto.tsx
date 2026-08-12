import TextReveal from "@/components/TextReveal";

const LINES = [
  { t: "いま、自分の仕事に「もやもや」を感じていませんか。" },
  { t: "ビッグ測量設計には、文系出身・他業種からの転身者が多く活躍しています。" },
  { t: "必要なのは、特別な経歴ではなく、これから手に職をつける覚悟だけ。" },
  { t: "国家資格の取得は、会社が試験費用全額負担で全力サポート。" },
  { t: "今日の一歩が、5 年後のあなたを変える。", em: true },
];

export default function Manifesto() {
  return (
    <section id="message" className="relative bg-white py-24 md:py-40">
      <div className="max-w-4xl mx-auto px-5 md:px-10 text-left">
        <p className="font-display font-bold text-xs md:text-sm tracking-widest text-brand-deep">
          [ Our Message ]
        </p>

        <p className="mt-6 md:mt-8 font-script text-5xl md:text-7xl text-ink leading-none">
          Change Your Life.
        </p>

        <div className="mt-14 md:mt-20 space-y-6 md:space-y-8">
          {LINES.map((l, i) => (
            <TextReveal
              key={i}
              as="p"
              delay={i * 150}
              className={`font-sans font-extrabold leading-[1.7] tracking-tight ${
                l.em
                  ? "text-2xl md:text-4xl text-brand"
                  : "text-lg md:text-2xl text-ink"
              }`}
            >
              {l.t}
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
