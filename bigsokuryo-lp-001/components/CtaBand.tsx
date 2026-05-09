"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  caption?: string;
  href: string;
  ctaLabel: string;
};

export default function CtaBand({
  eyebrow,
  title,
  caption,
  href,
  ctaLabel,
}: Props) {
  return (
    <section className="bg-navy text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
        <div>
          {eyebrow && (
            <p className="text-[10px] md:text-xs tracking-[0.4em] text-white/80 font-bold">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 font-sans font-black text-2xl md:text-4xl heading-display">
            {title}
          </h2>
          {caption && (
            <p className="mt-3 text-sm md:text-base text-white/85 leading-relaxed">
              {caption}
            </p>
          )}
        </div>
        <motion.a
          whileHover={{ x: 4 }}
          href={href}
          className="inline-flex items-center justify-between gap-4 bg-white text-navy px-7 py-4 text-sm md:text-base tracking-[0.2em] font-bold hover:bg-sand transition-colors min-w-[260px]"
        >
          {ctaLabel}
          <span className="text-xl">→</span>
        </motion.a>
      </div>
    </section>
  );
}
