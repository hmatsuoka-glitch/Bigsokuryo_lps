"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const STORAGE_KEY = "bigsokuryo:chance-popup-dismissed";
const DELAY_MS = 30_000;

export default function ChancePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(STORAGE_KEY) === "1") return;

    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function dismiss() {
    setOpen(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage may be blocked — non-fatal */
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="chance-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] grid place-items-center p-4"
        >
          {/* backdrop */}
          <button
            type="button"
            aria-label="閉じる"
            onClick={dismiss}
            className="absolute inset-0 bg-navy/50 backdrop-blur-sm cursor-default"
          />

          {/* card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="chance-popup-title"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 22,
              mass: 0.6,
            }}
            className="relative w-[min(92vw,440px)]  bg-white shadow-soft-lg border border-gold/30 overflow-hidden"
          >
            {/* gradient header */}
            <div className="relative bg-gradient-to-br from-navy via-navy-dark to-navy-deep px-6 py-8 text-center">
              <span
                aria-hidden
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 20%, rgba(199,155,61,0.55), transparent 45%), radial-gradient(circle at 10% 80%, rgba(255,255,255,0.15), transparent 50%)",
                }}
              />
              <span
                aria-hidden
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="relative text-[10px] tracking-[0.5em] text-gold-light font-bold"
              >
                LIMITED CHANCE
              </motion.p>
              <motion.h2
                id="chance-popup-title"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 260, damping: 20 }}
                className="relative mt-2 font-sans font-black text-3xl md:text-4xl text-white heading-display drop-shadow-lg leading-tight"
              >
                今がチャンス。
              </motion.h2>

              <button
                type="button"
                onClick={dismiss}
                aria-label="閉じる"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 grid place-items-center text-white text-lg transition-colors"
              >
                ×
              </button>
            </div>

            {/* body */}
            <div className="px-6 py-6 text-center">
              <p className="text-sm md:text-base text-navy/85 leading-relaxed">
                2027年卒・中途の
                <strong className="text-navy">エントリー受付中</strong>。
                <br />
                カジュアル面談だけのご相談も歓迎です。
              </p>

              <ul className="mt-4 grid gap-1.5 text-xs text-navy/75 mx-auto max-w-fit">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                  人柄重視・筆記試験なし
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                  入社1年目年収実績 340万円
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                  LINEで匿名相談OK
                </li>
              </ul>

              <div className="mt-6 grid gap-2.5">
                <a
                  href={SITE.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={dismiss}
                  className="group inline-flex items-center justify-center gap-3 bg-[#06C755] text-white py-3.5 rounded-full text-sm tracking-[0.2em] font-bold hover:opacity-90 transition-opacity shadow-soft"
                >
                  <span className="w-6 h-6 rounded-full bg-white text-[#06C755] grid place-items-center text-xs font-black">
                    L
                  </span>
                  公式LINEで応募する
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <button
                type="button"
                onClick={dismiss}
                className="mt-4 text-[11px] text-navy/45 hover:text-navy/70 transition-colors"
              >
                今は閉じる
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
