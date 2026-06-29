import Reveal from "@/components/Reveal";

export default function Manifesto() {
  return (
    <section className="py-20 md:py-32 bg-sand/50 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand/5 blur-3xl"
      />
      <div className="relative max-w-4xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-brand">MESSAGE</p>
          <h2 className="mt-4 font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-navy leading-[1.35] tracking-tight">
            「いま」を変えれば、<br />
            「未来」は変わる。
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 md:mt-12 space-y-5 text-base md:text-lg text-black/80 leading-[2] max-w-2xl">
            <p>いま、自分の仕事に「もやもや」を感じていませんか。</p>
            <p>
              ビッグ測量設計には、文系出身・他業種からの転身者が
              多く活躍しています。
            </p>
            <p>
              必要なのは、特別な経歴ではなく、
              <strong className="text-navy">これから手に職をつける覚悟</strong>
              だけ。
            </p>
            <p>
              国家資格 (測量士・測量士補) の取得は、
              会社が試験費用全額負担で全力サポートします。
            </p>
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-12 md:mt-14">
          <div className="flex items-center gap-4">
            <span aria-hidden className="h-px w-12 bg-brand" />
            <p className="text-sm md:text-base text-brand font-bold tracking-wide">
              今日の一歩が、5 年後のあなたを変える。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
