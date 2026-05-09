"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const tags = [
  "鉄道工事測量",
  "1ミクロン精度",
  "3D点群",
  "東京駅・渋谷駅・海の森",
  "創業45年",
];

const heroStats: { value: number; suffix?: string; label: string; decimals?: number }[] = [
  { value: 45, suffix: "年", label: "創業" },
  { value: 163, suffix: "名", label: "社員数" },
  { value: 79.9, suffix: "%", label: "有給取得率", decimals: 1 },
];

export default function Hero() {
  return (
    <section className="relative bg-white">
      {/* Top photo band */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/8] md:aspect-[16/6] overflow-hidden bg-navy-dark">
        <Image
          src="/bigsokuryo_top.jpg"
          alt="ビッグ測量設計"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy/40 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute left-5 right-5 bottom-6 md:left-12 md:bottom-10 max-w-3xl"
        >
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-white/80 font-bold">
            BIG SURVEY &amp; DESIGN — RECRUIT
          </p>
          <h1 className="mt-3 font-sans font-black text-3xl md:text-5xl lg:text-6xl text-white leading-[1.25] heading-display">
            思いやりを、
            <br />
            <span className="text-navy bg-white px-2">技術にのせて。</span>
          </h1>
        </motion.div>
      </div>

      {/* Body band */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2"
        >
          {tags.map((t) => (
            <span
              key={t}
              className="text-[11px] md:text-xs tracking-wide text-navy border border-navy/30 bg-white px-3 py-1.5"
            >
              # {t}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8 text-base md:text-lg text-navy-deep/80 leading-loose"
        >
          鉄道工事測量から、1ミクロンの構造物計測まで。
          <br />
          東京を支える測量会社、ビッグ測量設計の採用情報。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#entry"
            className="inline-flex items-center gap-2 bg-navy text-white px-7 py-3.5 text-sm tracking-[0.2em] font-bold hover:bg-navy-dark transition-colors"
          >
            エントリーする →
          </a>
          <a
            href="#message"
            className="inline-flex items-center gap-2 border border-navy/30 text-navy px-7 py-3.5 text-sm tracking-[0.2em] font-bold hover:bg-navy hover:text-white transition-colors"
          >
            代表メッセージを読む
          </a>
        </motion.div>

        {/* 3 stats row */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-14 grid grid-cols-3 gap-3 md:gap-6 border-y border-navy/15 py-6 md:py-8"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="text-[10px] md:text-xs text-navy/60 tracking-widest">
                {s.label}
              </dt>
              <dd className="mt-1 font-sans font-black text-2xl md:text-4xl text-navy tabular-nums whitespace-nowrap">
                <AnimatedCounter
                  to={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
