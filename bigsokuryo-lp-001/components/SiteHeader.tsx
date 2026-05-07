"use client";

import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  lpCode: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const navItems = [
  { href: "#about", label: "私たち" },
  { href: "#work", label: "成長" },
  { href: "#voice", label: "社員の声" },
  { href: "#requirements", label: "募集要項" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader({
  lpCode,
  ctaLabel = "エントリー",
  ctaHref = "#entry",
}: Props) {
  const { scrollY } = useScroll();
  const shadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 rgba(12,43,74,0)", "0 8px 24px rgba(12,43,74,0.08)"]
  );

  return (
    <motion.header
      style={{ boxShadow: shadow }}
      className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-navy/10"
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-xl font-bold text-navy">
            BIG <span className="text-gold">SOKURYO</span>
          </span>
          <span className="text-[10px] tracking-[0.3em] text-navy/50 hidden sm:inline">
            {lpCode}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-7 text-sm text-navy/80">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-gold transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          href={ctaHref}
          className="inline-flex items-center px-4 py-2 text-xs tracking-widest bg-navy text-white rounded-full hover:bg-gold transition-colors"
        >
          {ctaLabel}
        </motion.a>
      </div>
    </motion.header>
  );
}
