"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Motion";

export default function LineCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white overflow-hidden relative">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.18 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.6), transparent 40%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-white/80">OFFICIAL LINE</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl leading-snug">
            気軽な質問は<br />
            LINEで、どうぞ。
          </h2>
          <p className="mt-4 text-white/85 text-sm leading-relaxed">
            「現場のリアル」「資格のこと」「面接前のちょっとした不安」――
            匿名のままトークでやり取りできます。返信は採用担当より1営業日以内。
          </p>
          <p className="mt-3 text-xs text-white/70">
            ID: <span className="font-mono">{SITE.lineId}</span>
          </p>
        </Reveal>

        <Reveal delay={0.1} className="md:justify-self-end">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-emerald-700 font-bold px-8 py-5 rounded-full shadow-xl"
          >
            <span className="w-9 h-9 rounded-full bg-[#06C755] grid place-items-center text-white text-lg">
              L
            </span>
            <span className="tracking-wider">公式LINEで友だち追加</span>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
