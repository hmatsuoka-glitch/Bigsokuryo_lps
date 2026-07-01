"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Motion";

export default function TeamPhoto() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-dark text-center font-bold">
            OUR TEAM
          </p>
          <h2 className="mt-3 font-sans font-black text-3xl md:text-5xl text-navy text-center heading-display">
            同じ志を持つ、仲間と。
          </h2>
          <p className="mt-5 text-center text-sm md:text-base text-zinc-700 max-w-xl mx-auto leading-relaxed">
            若手からベテランまで、互いに支え合いながら現場に挑む。
            <br className="hidden md:inline" />
            それがビッグ測量設計のチームです。
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-7 h-px w-16 bg-gold origin-left"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="relative aspect-[4/3] overflow-hidden bg-navy-deep shadow-soft-lg">
            <Image
              src="/team-photo.jpg"
              alt="ビッグ測量設計のメンバー集合写真"
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
