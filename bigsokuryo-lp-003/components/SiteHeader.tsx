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
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/85 border-b border-emerald-700/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-xl font-bold text-navy">
            BIG <span className="text-emerald-700">SOKURYO</span>
          </span>
          <span className="hidden sm:inline text-[10px] tracking-[0.3em] text-emerald-700/70 font-bold">
            {lpCode}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-7 text-sm text-navy/80 font-medium">
          {[
            ["#about", "私たち"],
            ["#work", "成長"],
            ["#voice", "社員の声"],
            ["#benefits", "待遇"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="relative py-1 hover:text-emerald-700 transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-emerald-700 hover:after:w-full after:transition-all after:duration-300"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={ctaHref}
          className="inline-flex items-center px-5 py-2.5 text-xs tracking-widest font-bold bg-emerald-700 text-white rounded-full shadow-md shadow-emerald-700/20 hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-700/30 hover:-translate-y-0.5 transition-all duration-300"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
