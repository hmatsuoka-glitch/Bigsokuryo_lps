"use client";

import { useEffect, useState } from "react";
import { LineButton } from "./LineButton";

const DELAY_MS = 35_000;
const STORAGE_KEY = "bigsokuryo_lp002_chance_popup_dismissed";

export default function ChancePopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
  };

  if (!mounted || !open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="chance-popup-title"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden animate-[fadeIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          aria-hidden
          className="relative bg-brand text-white px-6 pt-12 pb-9 text-center overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <button
            onClick={close}
            aria-label="閉じる"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 grid place-items-center text-white text-lg leading-none transition"
          >
            ×
          </button>
          <p className="relative text-[10px] tracking-[0.4em] text-white/85">
            LIMITED CHANCE
          </p>
          <h3
            id="chance-popup-title"
            className="relative mt-3 font-sans font-bold text-3xl md:text-4xl tracking-tight"
          >
            今がチャンス。
          </h3>
        </div>

        <div className="px-6 py-7 md:px-8 md:py-8">
          <p className="text-center text-sm md:text-base text-black/85 leading-relaxed">
            未経験から<strong className="text-black">国家資格を取って人生を変える</strong>。<br />
            カジュアル面談だけのご相談も歓迎です。
          </p>
          <ul className="mt-5 space-y-2 text-sm text-black/80 max-w-xs mx-auto">
            <li className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-none" />
              <span>未経験歓迎・学歴不問・人柄重視</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-none" />
              <span>測量士・測量士補の試験費用 会社全額負担</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-none" />
              <span>LINE で匿名相談 OK</span>
            </li>
          </ul>

          <LineButton
            size="lg"
            className="mt-7 w-full"
            location="chance_popup"
            label="さらに詳しく見る"
          />

          <button
            onClick={close}
            className="mt-4 block mx-auto text-xs text-black/45 hover:text-black/70 transition"
          >
            今は閉じる
          </button>
        </div>
      </div>
    </div>
  );
}
