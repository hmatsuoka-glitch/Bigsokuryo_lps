"use client";

import { Reveal } from "@/components/Motion";

type Props = {
  accentClass?: string;
  category: string;
};

export default function EntryForm({
  accentClass = "bg-emerald-700 hover:bg-emerald-900",
  category,
}: Props) {
  return (
    <section
      id="entry"
      className="relative py-28 bg-gradient-to-b from-white to-emerald-50 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 30%, rgba(16,94,80,1) 1px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-emerald-700 font-bold">
            ENTRY
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy font-bold tracking-tight">
            {category}<span className="text-emerald-700">エントリー</span>
          </h2>
          <p className="mt-5 text-sm md:text-base text-navy/75 leading-[1.9]">
            ご質問・カジュアル面談のみのお問い合わせも歓迎です。
            <br className="hidden md:block" />
            まずは話を聞いてみたい、というご連絡をお待ちしています。
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form className="mt-12 grid gap-6 bg-white p-8 md:p-10 shadow-xl shadow-emerald-700/10 border border-emerald-700/10">
            <label className="block">
              <span className="text-xs tracking-widest text-emerald-700 font-bold">
                お名前
              </span>
              <input
                type="text"
                required
                className="mt-2 w-full border border-emerald-700/15 bg-emerald-50/40 px-4 py-3 text-navy placeholder:text-navy/30 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
                placeholder="例）測量 太郎"
              />
            </label>
            <label className="block">
              <span className="text-xs tracking-widest text-emerald-700 font-bold">
                メールアドレス
              </span>
              <input
                type="email"
                required
                className="mt-2 w-full border border-emerald-700/15 bg-emerald-50/40 px-4 py-3 text-navy placeholder:text-navy/30 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
                placeholder="example@example.com"
              />
            </label>
            <label className="block">
              <span className="text-xs tracking-widest text-emerald-700 font-bold">
                ご質問・志望動機（任意）
              </span>
              <textarea
                rows={5}
                className="mt-2 w-full border border-emerald-700/15 bg-emerald-50/40 px-4 py-3 text-navy placeholder:text-navy/30 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all resize-none"
                placeholder="文系・未経験ですが応募できますか？ など、お気軽にどうぞ。"
              />
            </label>
            <button
              type="submit"
              className={`group mt-2 ${accentClass} text-white py-4 rounded-full text-sm tracking-widest font-bold shadow-lg shadow-emerald-700/30 hover:shadow-xl hover:shadow-emerald-700/40 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2`}
            >
              送信する
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 bg-emerald-700/5 border border-emerald-700/15 p-6 md:p-7 text-sm text-navy/80 leading-[1.9]">
            <p className="font-bold text-navy mb-2 flex items-center gap-2">
              <span className="text-emerald-700">✉</span>
              直接の連絡を希望される方へ
            </p>
            <p>
              人事部 須藤 翠｜
              <a
                href="mailto:saiyou@bigsdc.co.jp"
                className="text-emerald-700 font-bold hover:underline underline-offset-4"
              >
                saiyou@bigsdc.co.jp
              </a>
            </p>
            <p className="mt-3 text-xs text-navy/55 leading-[1.85]">
              ※
              当社は採用選考におけるハラスメントを固く禁じています。選考の過程で気になることがあれば上記窓口にご連絡ください。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
