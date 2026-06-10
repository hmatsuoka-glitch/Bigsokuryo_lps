"use client";

import { LINE_URL } from "./LineButton";
import { trackLineClick } from "@/lib/analytics";

type Props = {
  lpCode: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function SiteHeader({
  ctaLabel = "公式LINEから応募する",
  ctaHref = LINE_URL,
}: Props) {
  const isExternal = ctaHref.startsWith("http");
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/85 border-b border-navy/10">
      <div className="max-w-6xl mx-auto px-4 md:px-5 h-14 md:h-16 flex items-center justify-between gap-3">
        <a href="#" className="flex items-center min-w-0">
          <img
            src="/logo-02.png"
            alt="ビッグ測量設計株式会社"
            className="h-8 md:h-11 w-auto flex-none"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-sm text-black/80">
          <a href="#business" className="hover:text-brand">事業内容</a>
          <a href="#flow" className="hover:text-brand">1 日の流れ</a>
          <a href="#about" className="hover:text-brand">数字で見る</a>
          <a href="#voice" className="hover:text-brand">社員紹介</a>
          <a href="#recruit" className="hover:text-brand">募集要項</a>
        </nav>
        <a
          href={ctaHref}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          onClick={() => {
            if (isExternal && ctaHref === LINE_URL) trackLineClick("header");
          }}
          className="inline-flex items-center px-3 md:px-4 py-2 text-[10px] md:text-xs tracking-widest bg-brand text-white rounded-full hover:bg-brand-dark transition flex-none whitespace-nowrap"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
