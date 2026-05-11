"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SITE } from "@/lib/site";

const tags = [
  "鉄道工事測量",
  "1ミクロン精度",
  "3D点群",
  "東京駅・渋谷駅・海の森",
  "創業45年",
];

export default function Hero() {
  return (
    <section className="relative bg-white">
      {/* Top photo band */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/8] lg:aspect-[16/7] overflow-hidden bg-navy-dark">
        <Image
          src="/works_img.jpg"
          alt="ビッグ測量設計の現場"
          fill
          priority
          quality={95}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1600px"
          style={{ objectPosition: "center 35%" }}
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy/30 to-navy-deep/30"
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute left-5 right-5 bottom-6 md:left-12 md:bottom-12 max-w-3xl"
        >
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-white/85 font-bold">
            BIG SURVEY &amp; DESIGN — RECRUIT
          </p>
          <h1 className="mt-4 font-sans font-black text-3xl md:text-5xl lg:text-6xl text-white heading-display">
            <span className="block leading-[1.5]">思いやりを、</span>
            <span className="inline-block mt-2 md:mt-3 leading-[1.4] text-navy bg-white px-3 py-1">
              技術にのせて。
            </span>
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
          className="mt-8 text-base md:text-lg text-zinc-700 leading-loose"
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
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] text-white px-7 py-3.5 text-sm tracking-[0.2em] font-bold hover:opacity-90 transition-opacity"
          >
            <span className="w-5 h-5 rounded-full bg-white text-[#06C755] grid place-items-center text-xs font-black">
              L
            </span>
            LINEで応募する →
          </a>
          <a
            href="#message"
            className="inline-flex items-center gap-2 border border-navy/30 text-navy px-7 py-3.5 text-sm tracking-[0.2em] font-bold hover:bg-navy hover:text-white transition-colors"
          >
            代表メッセージを読む
          </a>
        </motion.div>
      </div>
    </section>
  );
}
