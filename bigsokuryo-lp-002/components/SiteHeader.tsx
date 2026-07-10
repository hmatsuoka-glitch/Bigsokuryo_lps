"use client";

import { LINE_URL } from "./LineButton";
import { trackLineClick } from "@/lib/analytics";

type Props = {
  lpCode?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function SiteHeader({
  ctaLabel = "カジュアル面談",
  ctaHref = LINE_URL,
}: Props) {
  const isExternal = ctaHref.startsWith("http");
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="max-w-[1440px] mx-auto pl-4 md:pl-8 pr-0 h-[72px] md:h-[90px] flex items-center justify-between">
        <a href="#top" className="flex items-center min-w-0 relative">
          <span className="bg-white shadow-[0_4px_18px_-8px_rgba(0,0,0,0.25)] border border-black/5 p-2 md:p-3 -mb-6 md:-mb-8 rounded-sm">
            <img
              src="/logo-02.png"
              alt="ビッグ測量設計株式会社"
              className="h-8 md:h-11 w-auto flex-none"
            />
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-ink">
          <a href="#about" className="hover:text-brand transition-colors">
            会社紹介
          </a>
          <a href="#jobs" className="hover:text-brand transition-colors">
            仕事を知る
          </a>
          <a href="#projects" className="hover:text-brand transition-colors">
            プロジェクト
          </a>
          <a href="#person" className="hover:text-brand transition-colors">
            社員紹介
          </a>
          <a href="#environment" className="hover:text-brand transition-colors">
            働く環境
          </a>
          <a href="#recruit" className="hover:text-brand transition-colors">
            募集要項
          </a>
        </nav>

        <a
          href={ctaHref}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          onClick={() => {
            if (isExternal && ctaHref === LINE_URL) trackLineClick("header");
          }}
          className="group h-full flex flex-col items-center justify-center px-6 md:px-10 bg-brand hover:bg-brand-dark text-white transition-colors"
        >
          <span className="font-display font-bold tracking-widest text-[11px] md:text-sm leading-none">
            {ctaLabel}
          </span>
          <span
            aria-hidden
            className="mt-1 md:mt-2 text-[10px] md:text-xs transition-transform group-hover:translate-y-0.5"
          >
            ↓
          </span>
        </a>
      </div>
    </header>
  );
}
