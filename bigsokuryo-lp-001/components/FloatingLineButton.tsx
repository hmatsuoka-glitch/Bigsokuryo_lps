"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/lib/site";
import { trackLineClick } from "@/lib/analytics";

export default function FloatingLineButton() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 240], [0, 1]);
  const y = useTransform(scrollY, [0, 240], [16, 0]);

  return (
    <motion.a
      href={SITE.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLineClick("floating_button")}
      style={{ opacity, y }}
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40"
      aria-label="公式LINE"
    >
      <span className="absolute inset-0 rounded-full bg-[#06C755]/40 animate-ping" />
      <span className="relative flex w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#06C755] grid place-items-center text-white shadow-soft-lg">
        <LineGlyph />
      </span>
    </motion.a>
  );
}

function LineGlyph() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.48 2 2 5.73 2 10.32c0 4.11 3.55 7.55 8.36 8.21.32.07.76.21.87.49.1.25.07.64.03.9 0 0-.12.7-.14.85-.04.25-.2.98.86.54 1.06-.45 5.71-3.36 7.79-5.76C21.21 13.93 22 12.21 22 10.32 22 5.73 17.52 2 12 2Zm-3.79 11.11h-1.99c-.29 0-.53-.24-.53-.53V8.84c0-.29.24-.53.53-.53.29 0 .53.24.53.53v3.21h1.46c.29 0 .53.24.53.53s-.24.53-.53.53Zm2.21-.53c0 .29-.24.53-.53.53s-.53-.24-.53-.53V8.84c0-.29.24-.53.53-.53s.53.24.53.53v3.74Zm4.51 0c0 .23-.15.43-.36.5a.62.62 0 0 1-.17.03.55.55 0 0 1-.42-.21l-2.04-2.78v2.46c0 .29-.24.53-.53.53s-.53-.24-.53-.53V8.84c0-.23.15-.43.36-.5.05-.02.11-.03.17-.03.16 0 .32.07.42.21l2.04 2.78V8.84c0-.29.24-.53.53-.53s.53.24.53.53v3.74Zm3.27-2.4c.29 0 .53.24.53.53s-.24.53-.53.53h-1.46v.93h1.46c.29 0 .53.24.53.53s-.24.53-.53.53h-1.99c-.29 0-.53-.24-.53-.53V8.84c0-.29.24-.53.53-.53h1.99c.29 0 .53.24.53.53s-.24.53-.53.53h-1.46v.94h1.46Z" />
    </svg>
  );
}
