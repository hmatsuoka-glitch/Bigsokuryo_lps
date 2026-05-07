"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const tags = [
  "鉄道工事測量",
  "1ミクロン精度",
  "3D点群",
  "東京駅・渋谷駅・海の森",
  "創業45年",
];

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-sand"
    >
      <motion.div
        aria-hidden
        style={{ y: orbY }}
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-gold/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ y: orbY }}
        className="absolute -bottom-24 -left-24 w-[460px] h-[460px] rounded-full bg-sky-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,43,74,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(12,43,74,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm tracking-[0.4em] text-gold mb-6"
        >
          BIG SURVEY &amp; DESIGN — RECRUIT
        </motion.p>

        <motion.h1
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl leading-[1.3] text-navy text-balance"
        >
          思いやりを、
          <br />
          <motion.span
            initial={{ backgroundSize: "0% 0.4em" }}
            animate={{ backgroundSize: "100% 0.4em" }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="text-gold inline-block"
            style={{
              backgroundImage:
                "linear-gradient(transparent 65%, rgba(199,155,61,0.18) 65%)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 88%",
            }}
          >
            技術にのせて。
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 max-w-xl text-navy/80 leading-relaxed"
        >
          鉄道工事測量から、1ミクロンの構造物計測まで。
          <br />
          東京の地下と空、駅と街を支える測量会社、
          <br />
          ビッグ測量設計の採用情報です。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-7 flex flex-wrap gap-2 max-w-xl"
        >
          {tags.map((t) => (
            <span
              key={t}
              className="text-[11px] tracking-widest text-navy/70 border border-navy/15 bg-white/60 backdrop-blur px-3 py-1.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#entry"
            className="px-7 py-3 rounded-full bg-navy text-white text-sm tracking-widest hover:bg-gold transition-colors"
          >
            エントリーする
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#message"
            className="px-7 py-3 rounded-full border border-navy/30 text-navy text-sm tracking-widest hover:bg-navy hover:text-white transition-colors"
          >
            代表メッセージを読む
          </motion.a>
        </motion.div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="hidden md:block absolute right-10 bottom-10 text-[10px] tracking-[0.4em] text-navy/40 rotate-90 origin-bottom-right"
        >
          SCROLL ↓
        </motion.div>
      </div>
    </section>
  );
}
