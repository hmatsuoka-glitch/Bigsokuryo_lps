"use client";

import { useEffect, useState } from "react";
import { LINE_URL } from "./LineButton";
import { trackLineClick } from "@/lib/analytics";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const entry = document.getElementById("entry");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.target.id === "top") {
            setVisible(!e.isIntersecting);
          } else if (e.target.id === "entry") {
            if (e.isIntersecting) setVisible(false);
          }
        }
      },
      { threshold: 0.1 }
    );
    if (hero) io.observe(hero);
    if (entry) io.observe(entry);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLineClick("sticky_cta")}
      aria-hidden={!visible}
      className={`md:hidden fixed left-0 right-0 bottom-0 z-40 h-14 bg-brand hover:bg-brand-dark text-white font-sans font-extrabold text-sm tracking-widest flex items-center justify-center gap-2 transition-transform duration-300 shadow-[0_-8px_20px_-8px_rgba(0,0,0,0.25)] ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <span className="w-7 h-7 rounded-full bg-white text-brand grid place-items-center text-xs flex-none">
        L
      </span>
      LINE でカジュアル面談
      <span aria-hidden>→</span>
    </a>
  );
}
