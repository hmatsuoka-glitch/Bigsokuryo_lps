"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats: { value: number; suffix: string; label: string }[] = [
  { value: 94, suffix: "%", label: "新卒3年定着率" },
  { value: 28, suffix: "名", label: "若手有資格者" },
  { value: 100, suffix: "%", label: "資格取得支援" },
  { value: 2, suffix: "回／年", label: "面談・1on1" },
];

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 40]);

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
          NEW GRADUATE 2026 / 2027
        </motion.p>

        <motion.h1
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl leading-[1.3] text-navy text-balance"
        >
          地図に、
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
            自分の名前
          </motion.span>
          を残す。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 max-w-xl text-navy/80 leading-relaxed"
        >
          あなたが歩いた道、あなたが測った土地が、
          この街の図面に刻まれていく。
          <br />
          ビッグ測量は、未経験からはじめる若手を本気で育てる会社です。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
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
            href="#voice"
            className="px-7 py-3 rounded-full border border-navy/30 text-navy text-sm tracking-widest hover:bg-navy hover:text-white transition-colors"
          >
            先輩社員の声を聞く
          </motion.a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/70 backdrop-blur rounded-2xl p-5 border border-navy/10"
            >
              <dt className="text-xs text-navy/60">{s.label}</dt>
              <dd className="mt-1 text-2xl font-bold text-navy">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </motion.dl>

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
