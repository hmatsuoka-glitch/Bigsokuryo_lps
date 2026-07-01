"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { trackLineClick } from "@/lib/analytics";

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
      {/* Top photo band — natural 3:2 aspect, no overlay so the full
          source photo is shown without aggressive cropping */}
      <div className="relative w-full aspect-[3/2] md:aspect-[16/8] overflow-hidden bg-navy-dark">
        <Image
          src="/hero-team.jpg"
          alt="ビッグ測量設計の若手社員"
          fill
          priority
          quality={95}
          sizes="(max-width: 1024px) 100vw, 1600px"
          style={{ objectPosition: "center" }}
          className="object-cover"
        />
      </div>

      {/* Body band */}
      <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] md:text-xs tracking-[0.5em] text-gold-dark font-bold"
        >
          BIG SURVEY &amp; DESIGN — RECRUIT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-sans font-black text-5xl md:text-7xl lg:text-8xl text-navy heading-display leading-[1.15]"
        >
          <span className="block">思いやりを、</span>
          <span className="block mt-2">技術にのせて。</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-2"
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
          transition={{ delay: 0.3, duration: 0.6 }}
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
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLineClick("hero")}
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
