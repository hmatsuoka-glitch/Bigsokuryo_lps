"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats: {
  label: string;
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  caption: string;
}[] = [
  { label: "創業", to: 1980, prefix: "", suffix: "年", caption: "45年の歴史" },
  { label: "社員数", to: 163, suffix: "名", caption: "技術と人柄の集団" },
  {
    label: "有給取得率",
    to: 79.9,
    suffix: "%",
    decimals: 1,
    caption: "（執行役員談）",
  },
  { label: "上野駅まで", to: 10, suffix: "分", caption: "都心立地・徒歩圏" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-sand">
      {/* decorative gradients */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(16,94,80,0.18), transparent)",
        }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-emerald-300/40 blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="absolute -bottom-32 -left-24 w-[460px] h-[460px] rounded-full bg-amber-200/60 blur-3xl"
      />
      {/* subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,43,74,1) 1px, transparent 1px), linear-gradient(90deg, rgba(12,43,74,1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs md:text-sm tracking-[0.45em] text-emerald-700 mb-6 font-bold"
        >
          PEOPLE-FIRST RECRUITMENT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-serif text-4xl md:text-7xl leading-[1.2] text-navy text-balance font-bold tracking-tight"
        >
          思いやりを、
          <br />
          <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
            技術にのせて。
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-xl text-base md:text-lg text-navy/85 leading-[1.9]"
        >
          1980年から、東京・上野で測量を続けてきました。
          <br />
          文系出身者も、未経験者も、ここから測量人生を始めています。
          スキルより人柄を、結果より過程を、私たちは大切にしています。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#entry"
            className="group relative px-8 py-4 rounded-full bg-emerald-700 text-white text-sm tracking-widest font-bold shadow-lg shadow-emerald-700/30 hover:shadow-xl hover:shadow-emerald-700/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">まず話を聞いてみる →</span>
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full border-2 border-emerald-700/40 text-emerald-900 text-sm tracking-widest font-bold hover:bg-emerald-700 hover:text-white hover:border-emerald-700 hover:-translate-y-0.5 transition-all duration-300"
          >
            会社を知る
          </a>
        </motion.div>

        <motion.dl
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.7 } },
          }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white/80 backdrop-blur rounded-2xl px-4 py-4 border border-emerald-700/15 hover:border-emerald-600/50 hover:shadow-lg hover:shadow-emerald-700/10 transition-all"
            >
              <dt className="text-[10px] tracking-[0.3em] text-emerald-700 font-bold">
                {s.label}
              </dt>
              <dd className="mt-1 font-serif text-2xl md:text-3xl text-navy font-bold">
                <AnimatedCounter
                  to={s.to}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </dd>
              <p className="mt-1 text-[10px] text-navy/55">{s.caption}</p>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      {/* scroll indicator */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-emerald-800/60"
      >
        <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-8 bg-emerald-700/40"
        />
      </motion.div>
    </section>
  );
}
