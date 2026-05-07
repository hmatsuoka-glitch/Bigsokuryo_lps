"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

const ticker = [
  "東京駅丸の内駅舎 復原工事",
  "銀座線 渋谷駅 移設工事",
  "海の森水上競技場 地形測量",
  "鉄道工事測量",
  "1ミクロン精度 特許技術",
  "3Dレーザー計測",
  "創業1980年",
];

const heroStats = [
  { value: 45, suffix: "年", label: "創業" },
  { value: 163, suffix: "名", label: "社員数" },
  { value: 0.001, suffix: "mm", label: "計測精度", decimals: 3 },
  { value: 79.9, suffix: "%", label: "有給取得率", decimals: 1 },
];

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Mouse-tracking parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });
  const px1 = useTransform(sx, [-1, 1], [-18, 18]);
  const py1 = useTransform(sy, [-1, 1], [-18, 18]);
  const px2 = useTransform(sx, [-1, 1], [22, -22]);
  const py2 = useTransform(sy, [-1, 1], [22, -22]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set((e.clientX / w) * 2 - 1);
      my.set((e.clientY / h) * 2 - 1);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-sand"
    >
      <motion.div
        aria-hidden
        style={{ y: orbY, x: px1 }}
        className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full bg-gold/25 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ y: orbY, x: px2 }}
        className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-sky-300/35 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ x: px1, y: py1 }}
        className="absolute top-1/3 right-[15%] w-2 h-2 rounded-full bg-gold/60 hidden md:block"
      />
      <motion.div
        aria-hidden
        style={{ x: px2, y: py2 }}
        className="absolute top-1/4 left-[10%] w-1.5 h-1.5 rounded-full bg-navy/40 hidden md:block"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,43,74,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(12,43,74,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] md:text-xs tracking-[0.5em] text-gold-dark mb-6 font-bold"
        >
          BIG SURVEY &amp; DESIGN — RECRUIT
        </motion.p>

        <motion.h1
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-black text-5xl md:text-6xl lg:text-7xl text-navy heading-display text-balance"
        >
          思いやりを、
          <br />
          <span className="relative inline-block">
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 bottom-[0.12em] h-[0.28em] bg-gold/25 origin-left rounded-sm -z-0"
            />
            <span className="relative text-gradient-gold">技術にのせて。</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 max-w-xl text-navy/85 leading-loose text-base md:text-lg"
        >
          鉄道工事測量から、1ミクロンの構造物計測まで。
          <br />
          東京を支える測量会社、ビッグ測量設計の採用情報。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#entry"
            className="group px-7 py-3.5 rounded-full bg-navy text-white text-sm tracking-[0.2em] font-bold hover:bg-gold transition-colors shadow-soft hover:shadow-gold inline-flex items-center gap-2"
          >
            エントリーする
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#message"
            className="px-7 py-3.5 rounded-full border border-navy/30 text-navy text-sm tracking-[0.2em] font-bold hover:bg-navy hover:text-white transition-colors"
          >
            代表メッセージを読む
          </motion.a>
        </motion.div>

        {/* Hero stat strip */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl"
        >
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="bg-white/75 backdrop-blur-sm rounded-2xl p-4 border border-navy/10 shadow-soft hover-lift overflow-hidden"
            >
              <dt className="text-[11px] text-navy/60 tracking-widest truncate">
                {s.label}
              </dt>
              <dd className="mt-1 font-sans font-black text-xl md:text-2xl text-navy tabular-nums whitespace-nowrap">
                <AnimatedCounter
                  to={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="hidden md:flex absolute right-8 bottom-12 flex-col items-center gap-2 text-[10px] tracking-[0.4em] text-navy/40"
        >
          <span className="rotate-180" style={{ writingMode: "vertical-rl" }}>
            SCROLL
          </span>
          <span className="w-px h-12 bg-navy/30 animate-floaty" />
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div className="relative border-y border-navy/10 bg-white/60 backdrop-blur py-3 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...ticker, ...ticker].map((t, i) => (
            <span
              key={i}
              className="text-xs tracking-[0.3em] text-navy/55 inline-flex items-center gap-3"
            >
              <span className="w-1 h-1 rounded-full bg-gold" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
