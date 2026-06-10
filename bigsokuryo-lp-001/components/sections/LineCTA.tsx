"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { trackLineClick } from "@/lib/analytics";
import { Reveal } from "@/components/Motion";

export default function LineCTA() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-navy-dark via-navy to-emerald-700 text-white overflow-hidden relative">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.18 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.6), transparent 40%), radial-gradient(circle at 10% 80%, rgba(255,255,255,0.3), transparent 40%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-white/80 font-bold">
            OFFICIAL LINE
          </p>
          <h2 className="mt-3 font-sans font-black text-3xl md:text-5xl leading-snug heading-display">
            LINEから
            <br />
            お気軽にどうぞ！
          </h2>
          <p className="mt-5 text-white/90 text-sm md:text-base leading-loose">
            現場のこと、資格のこと、面接前のちょっとした不安まで――
            <br />
            なんでもお気軽にメッセージください！
            <br />
            採用担当が1営業日以内にお返事します。
          </p>
          <p className="mt-3 text-xs text-white/75">
            ID:{" "}
            <span className="font-mono bg-white/15 px-2 py-0.5 ">
              {SITE.lineId}
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.1} className="md:justify-self-end">
          <motion.a
            whileHover={{ scale: 1.04, rotate: -1 }}
            whileTap={{ scale: 0.97 }}
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLineClick("line_cta_section")}
            className="group relative inline-flex items-center gap-3 bg-white text-navy font-bold px-8 py-5 rounded-full shadow-soft-lg hover:shadow-gold transition-shadow"
          >
            <span className="absolute inset-0 rounded-full bg-white animate-pulse opacity-50 -z-10 group-hover:animate-none" />
            <span className="w-10 h-10 rounded-full bg-[#06C755] grid place-items-center text-white text-xl font-black shadow-soft">
              L
            </span>
            <span className="tracking-[0.2em]">公式LINEで友だち追加</span>
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
