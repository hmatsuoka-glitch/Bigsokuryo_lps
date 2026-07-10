"use client";

import { LINE_URL } from "@/components/LineButton";
import { trackLineClick } from "@/lib/analytics";
import LetterPop from "@/components/LetterPop";

export default function FinalCTA() {
  return (
    <section
      id="entry"
      className="relative py-24 md:py-40 text-white overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/top-img.JPG')" }}
      />
      <div aria-hidden className="absolute inset-0 bg-entry-grad" />
      <div
        aria-hidden
        className="absolute inset-0 bg-brand-deep/40 mix-blend-multiply"
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 text-center">
        <p className="font-display font-semibold tracking-[0.4em] text-[11px] md:text-sm text-white/85">
          BIG SURVEY &amp; DESIGN
        </p>
        <h2 className="mt-4 md:mt-6 font-display font-extrabold text-[64px] md:text-[120px] leading-none tracking-tight">
          <LetterPop text="ENTRY" />
        </h2>

        <div className="mt-8 md:mt-12 inline-block border-2 md:border-[3px] border-white px-6 md:px-12 py-5 md:py-8">
          <p className="font-sans font-extrabold text-xl md:text-3xl leading-[1.5] tracking-tight">
            &quot;まずは、カジュアル面談から。&quot;
          </p>
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-sm md:text-base text-white/85 leading-relaxed">
          公式 LINE を追加いただくだけで、日程調整が始められます。<br className="hidden md:block" />
          匿名でのご質問だけでも大歓迎です。担当より 2 営業日以内にご返信いたします。
        </p>

        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLineClick("entry_cta")}
            className="group inline-flex items-center gap-3 bg-white text-brand-deep font-sans font-extrabold text-sm md:text-base tracking-widest px-8 md:px-10 py-4 md:py-5 rounded-full shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all"
          >
            <span className="w-7 h-7 rounded-full bg-brand text-white grid place-items-center flex-none text-xs">
              L
            </span>
            公式 LINE でカジュアル面談を申し込む
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="#recruit"
            className="inline-flex items-center gap-2 border border-white/60 text-white font-sans font-bold text-xs md:text-sm tracking-widest px-6 md:px-8 py-4 md:py-5 rounded-full hover:bg-white/10 transition-colors"
          >
            募集要項をもう一度見る
          </a>
        </div>

        <p className="mt-8 text-[11px] md:text-xs text-white/60 tracking-widest">
          未経験歓迎 / 学歴不問 / 人柄重視
        </p>
      </div>
    </section>
  );
}
