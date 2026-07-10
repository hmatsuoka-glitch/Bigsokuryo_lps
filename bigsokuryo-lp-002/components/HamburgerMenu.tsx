"use client";

import { useEffect, useState } from "react";
import { LINE_URL } from "./LineButton";
import { trackLineClick } from "@/lib/analytics";

const NAV = [
  { en: "Top", ja: "トップ", href: "#top" },
  { en: "Message", ja: "メッセージ", href: "#message" },
  { en: "About us", ja: "私たちについて", href: "#about" },
  { en: "Jobs", ja: "事業内容", href: "#jobs" },
  { en: "Projects", ja: "プロジェクト", href: "#projects" },
  { en: "Person", ja: "社員紹介", href: "#person" },
  { en: "Environment", ja: "働く環境", href: "#environment" },
  { en: "Recruit info", ja: "募集要項", href: "#recruit" },
];

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const body = document.body;
    if (open) {
      const scrollY = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
      return () => {
        body.style.position = "";
        body.style.top = "";
        body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  return (
    <>
      <button
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden fixed top-3 right-3 z-[70] w-14 h-14 rounded-xl bg-brand hover:bg-brand-dark shadow-lg flex flex-col items-center justify-center gap-[6px] transition-colors"
      >
        {open ? (
          <span className="relative w-6 h-6">
            <span className="absolute inset-x-0 top-1/2 h-[2px] bg-white rotate-45" />
            <span className="absolute inset-x-0 top-1/2 h-[2px] bg-white -rotate-45" />
          </span>
        ) : (
          <>
            <span className="block w-7 h-[2px] bg-white" />
            <span className="block w-5 h-[2px] bg-white self-center" />
            <span className="block w-3 h-[2px] bg-white self-end mr-1" />
          </>
        )}
      </button>

      {open && (
        <div
          className="md:hidden fixed inset-0 z-[65] text-white overflow-y-auto"
          style={{
            background:
              "linear-gradient(135deg, #0B4022 0%, #007030 55%, #00913F 100%)",
            animation: "fadeIn 0.35s ease-out",
          }}
        >
          <div className="px-6 pt-6">
            <img
              src="/logo-02.png"
              alt="ビッグ測量設計"
              className="h-9 w-auto bg-white p-1"
            />
          </div>

          <nav className="mt-8 px-6">
            <ul className="divide-y divide-white/20 border-y border-white/20">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5"
                  >
                    <span className="font-display font-bold text-2xl tracking-tight">
                      {n.en}
                    </span>
                    <span className="text-xs text-white/70 tracking-wider">
                      {n.ja}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 mx-6 mb-10 rounded-xl bg-brand-dark/50 border border-white/20 p-5">
            <p className="font-display font-bold text-xs tracking-widest text-white/80 text-center">
              ENTRY
            </p>
            <p className="mt-2 text-center font-sans font-bold text-lg leading-tight">
              まずは、カジュアル面談から。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackLineClick("hamburger");
                setOpen(false);
              }}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-white text-brand-deep font-sans font-extrabold text-sm tracking-widest px-5 py-4 shadow-md"
            >
              <span className="w-6 h-6 rounded-full bg-brand text-white grid place-items-center flex-none text-xs">
                L
              </span>
              公式 LINE でカジュアル面談
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
