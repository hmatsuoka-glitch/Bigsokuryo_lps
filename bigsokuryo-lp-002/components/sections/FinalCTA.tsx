import Reveal from "@/components/Reveal";
import { LineButton } from "@/components/LineButton";

export default function FinalCTA() {
  return (
    <section
      id="entry"
      className="relative py-20 md:py-28 bg-navy text-white overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-brand">
            CONTACT
          </p>
          <h2 className="mt-4 font-sans font-bold text-3xl md:text-5xl leading-[1.3] tracking-tight">
            まずは公式 LINE で、<br className="md:hidden" />
            気軽に相談。
          </h2>
          <p className="mt-6 text-sm md:text-base text-white/85 leading-relaxed">
            応募・カジュアル面談のご相談は、公式 LINE から。<br />
            匿名でのご質問だけでも大歓迎です。担当より
            2 営業日以内にご返信いたします。
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <LineButton size="lg" location="final_cta" className="w-full sm:w-auto" />
        </Reveal>

        <Reveal delay={250} className="mt-6">
          <p className="text-[11px] md:text-xs text-white/55 tracking-wide">
            未経験歓迎 / 学歴不問 / 人柄重視
          </p>
        </Reveal>
      </div>
    </section>
  );
}
