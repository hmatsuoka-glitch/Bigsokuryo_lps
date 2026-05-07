"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#numbers", label: "数字" },
  { href: "#features", label: "事業" },
  { href: "#message", label: "代表" },
  { href: "#voice", label: "社員" },
  { href: "#projects", label: "実績" },
  { href: "#requirements", label: "募集要項" },
  { href: "#flow", label: "選考" },
];

export default function SiteHeader() {
  const { scrollY } = useScroll();
  const shadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 rgba(12,43,74,0)", "0 8px 24px rgba(12,43,74,0.08)"]
  );
  const bg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0.7)", "rgba(255,255,255,0.92)"]
  );
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ boxShadow: shadow, backgroundColor: bg }}
      className="sticky top-0 z-40 backdrop-blur border-b border-navy/10"
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/header_logo.png"
            alt="ビッグ測量設計株式会社"
            width={94}
            height={70}
            priority
            className="h-9 w-auto"
          />
          <span className="hidden sm:flex items-baseline gap-2">
            <span className="font-sans font-black text-lg text-navy heading-display leading-none">
              BIG <span className="text-gradient-gold">SOKURYO</span>
            </span>
            <span className="text-[10px] tracking-[0.3em] text-navy/50">
              since 1980
            </span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-navy/80">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-gold-dark transition-colors underline-grow"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#entry"
            className="hidden sm:inline-flex items-center px-5 py-2.5 text-xs tracking-[0.2em] bg-navy text-white rounded-full hover:bg-gold transition-colors font-bold shadow-soft"
          >
            エントリー
          </motion.a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="メニューを開く"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-navy/5 transition-colors"
          >
            <span className="relative w-5 h-3 block">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-navy transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-navy transition-transform ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-navy/10"
          >
            <ul className="px-5 py-4 grid grid-cols-2 gap-2 text-sm">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2  text-navy/80 hover:bg-sand"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="col-span-2 mt-2">
                <a
                  href="#entry"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-navy text-white py-3 rounded-full font-bold text-xs tracking-[0.2em]"
                >
                  エントリーする
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
