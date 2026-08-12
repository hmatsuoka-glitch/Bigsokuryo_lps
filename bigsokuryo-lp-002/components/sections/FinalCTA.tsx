"use client";

import { LINE_URL } from "@/components/LineButton";
import { trackLineClick } from "@/lib/analytics";
import LetterPop from "@/components/LetterPop";

const STEPS = [
  { n: "STEP 1", label: "LINE で友だち追加（30 秒）" },
  { n: "STEP 2", label: "かんたんな質問に答える（約 1 分）" },
  { n: "STEP 3", label: "面談の希望日時を選ぶだけ" },
];

export default function FinalCTA() {
  return (
    <section
      id="entry"
      className="relative py-16 md:py-24 text-white overflow-hidden"
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

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 text-center">
        <p className="font-display font-semibold tracking-[0.4em] text-[11px] md:text-sm text-white/85">
          BIG SURVEY &amp; DESIGN
        </p>
        <h2 className="mt-4 md:mt-6 font-display font-extrabold text-[56px] md:text-[96px] leading-none tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)]">
          <LetterPop text="ENTRY" />
        </h2>

        <div className="mt-6 md:mt-10 inline-block border-2 md:border-[3px] border-white bg-brand-deep/60 backdrop-blur-sm px-5 md:px-12 py-4 md:py-6">
          <p className="font-sans font-extrabold text-lg md:text-2xl leading-[1.5] tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            &quot;まずは、カジュアル面談から。&quot;
          </p>
        </div>

        <p className="mt-6 md:mt-8 max-w-2xl mx-auto text-sm md:text-base text-white/85 leading-relaxed">
          公式 LINE を追加いただくだけで、日程調整が始められます。<br className="hidden md:block" />
          匿名でのご質問だけでも大歓迎です。担当より原則 24 時間以内 (営業日) にご返信いたします。
        </p>

        {/* LINE 追加後の 3 ステップ */}
        <ol className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto text-left">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="bg-white/10 border border-white/25 backdrop-blur-sm p-5 md:p-6"
            >
              <p className="font-display font-bold text-xs md:text-sm tracking-widest text-white/80">
                {s.n}
              </p>
              <p className="mt-2 font-sans font-bold text-sm md:text-base text-white leading-snug">
                {s.label}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 md:mt-14 flex flex-col items-center gap-4">
          {/* TODO (FIX-15 発注者確認): PC のみ LINE 友だち追加 QR コードを表示する。
              /public/line-qr.png を配置後、以下の <img> を有効化してください。
              QR の内容 URL: https://page.line.me/200yejlf
          <div className="hidden lg:flex items-center gap-6 bg-white p-4 rounded-lg mb-2">
            <img src="/line-qr.png" alt="公式 LINE QR コード" className="w-32 h-32" />
            <p className="text-sm text-brand-deep font-bold">
              スマホで読み取って<br />そのまま追加できます。
            </p>
          </div>
          */}
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLineClick("entry")}
            className="group inline-flex items-center gap-3 bg-white text-brand-deep font-sans font-extrabold text-sm md:text-base tracking-widest w-full max-w-md justify-center px-8 md:px-10 py-4 md:py-5 rounded-full shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all"
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
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLineClick("entry_soft")}
            className="text-sm text-white underline underline-offset-4 hover:text-brand-soft transition-colors"
          >
            まずは LINE で質問だけしてみる →
          </a>
        </div>

        <p className="mt-6 text-[11px] md:text-xs text-white/70 tracking-wide">
          ご入力いただいた情報は採用選考の目的にのみ使用します。
        </p>
        <p className="mt-2 text-[11px] md:text-xs text-white/60 tracking-widest">
          未経験歓迎 / 学歴不問 / 人柄重視
        </p>
      </div>
    </section>
  );
}
