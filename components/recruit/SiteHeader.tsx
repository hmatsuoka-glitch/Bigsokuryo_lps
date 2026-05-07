import Link from "next/link";

type Props = {
  /** トップで表示する小さなコード番号（例: LP-001） */
  lpCode: string;
  /** ヘッダ右のCTAリンクのテキストとURL */
  ctaLabel?: string;
  ctaHref?: string;
  /** カラーテーマ */
  tone?: "navy" | "amber" | "emerald";
};

const toneMap = {
  navy: "text-navy",
  amber: "text-amber-700",
  emerald: "text-emerald-800",
} as const;

export default function SiteHeader({
  lpCode,
  ctaLabel = "エントリー",
  ctaHref = "#entry",
  tone = "navy",
}: Props) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-navy/10">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3">
          <span className={`font-serif text-xl font-bold ${toneMap[tone]}`}>
            BIG <span className="text-gold">SOKURYO</span>
          </span>
          <span className="text-[10px] tracking-[0.3em] text-navy/50">
            {lpCode}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-navy/80">
          <a href="#about" className="hover:text-gold">私たち</a>
          <a href="#work" className="hover:text-gold">仕事</a>
          <a href="#voice" className="hover:text-gold">社員の声</a>
          <a href="#benefits" className="hover:text-gold">待遇</a>
          <a href="#faq" className="hover:text-gold">FAQ</a>
        </nav>
        <a
          href={ctaHref}
          className="inline-flex items-center px-4 py-2 text-xs tracking-widest bg-navy text-white rounded-full hover:bg-gold transition"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
