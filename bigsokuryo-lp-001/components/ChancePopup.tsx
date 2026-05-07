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
        <>
          {/* backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={dismiss}
            className="fixed inset-0 z-[60] bg-navy/40 backdrop-blur-sm"
            aria-hidden
          />

          {/* card */}
          <motion.div
            key="card"
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
            className="fixed left-1/2 -translate-x-1/2 bottom-6 md:bottom-10 z-[61] w-[min(92vw,420px)]"
          >
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-soft-lg border border-gold/30">
              {/* gradient header */}
              <div className="relative h-24 bg-gradient-to-br from-navy via-navy-dark to-navy-deep overflow-hidden">
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

                <motion.span
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="absolute top-4 left-5 text-[10px] tracking-[0.4em] text-gold-light font-bold"
                >
                  LIMITED CHANCE
                </motion.span>

                <span
                  aria-hidden
                  className="absolute -bottom-6 left-5 font-sans font-black text-5xl text-white heading-display drop-shadow-lg"
                >
                  今がチャンス。
                </span>
              </div>

              {/* close button */}
              <button
                type="button"
                onClick={dismiss}
                aria-label="閉じる"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 grid place-items-center text-white text-lg transition-colors"
              >
                ×
              </button>

              <div className="p-6 pt-12">
                <p className="text-sm md:text-base text-navy/85 leading-loose">
                  2027年卒・中途の<strong className="text-navy">エントリー受付中</strong>。<br />
                  カジュアル面談だけのご相談も歓迎です。
                </p>

                <ul className="mt-4 grid gap-1.5 text-xs text-navy/75">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    人柄重視・筆記試験なし
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    入社1年目年収実績 340万円
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    LINEで匿名相談OK
                  </li>
                </ul>

                <div className="mt-6 grid gap-2.5">
                  <a
                    href="#entry"
                    onClick={dismiss}
                    className="group inline-flex items-center justify-center gap-2 bg-navy text-white py-3.5 rounded-full text-sm tracking-[0.2em] font-bold hover:bg-gold transition-colors shadow-soft"
                  >
                    エントリーフォームへ
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href={SITE.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={dismiss}
                    className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white py-3 rounded-full text-xs tracking-[0.2em] font-bold hover:opacity-90 transition-opacity"
                  >
                    <span className="w-5 h-5 rounded-full bg-white text-[#06C755] grid place-items-center text-xs font-black">
                      L
                    </span>
                    LINEで相談する
                  </a>
                </div>

                <button
                  type="button"
                  onClick={dismiss}
                  className="mt-4 w-full text-center text-[11px] text-navy/45 underline-grow"
                >
                  今は閉じる
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
