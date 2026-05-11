type Props = {
  lpCode: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function SiteHeader({
  lpCode,
  ctaLabel = "エントリー",
  ctaHref = "#entry",
}: Props) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/85 border-b border-navy/10">
      <div className="max-w-6xl mx-auto px-4 md:px-5 h-14 md:h-16 flex items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-2 md:gap-3 min-w-0">
          <img
            src="/header_logo.png"
            alt="ビック測量株式会社"
            className="h-8 md:h-10 w-auto flex-none"
          />
          <span className="flex items-baseline gap-1.5 md:gap-2 min-w-0">
            <span className="font-bold text-navy text-sm md:text-base truncate">
              ビック測量株式会社
            </span>
            <span className="hidden sm:inline text-[10px] md:text-xs tracking-[0.15em] text-black/55 flex-none">
              since 1980
            </span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-sm text-black/80">
          <a href="#business" className="hover:text-brand">事業内容</a>
          <a href="#flow" className="hover:text-brand">仕事の流れ</a>
          <a href="#about" className="hover:text-brand">数字で見る</a>
          <a href="#voice" className="hover:text-brand">社員紹介</a>
          <a href="#recruit" className="hover:text-brand">募集要項</a>
        </nav>
        <a
          href={ctaHref}
          className="inline-flex items-center px-3 md:px-4 py-2 text-[11px] md:text-xs tracking-widest bg-brand text-white rounded-full hover:bg-brand-dark transition flex-none"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
