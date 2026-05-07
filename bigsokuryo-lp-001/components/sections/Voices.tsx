"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const voices = [
  {
    name: "M.K.（入社3年目／新卒）",
    college: "工業高等専門学校 卒",
    quote:
      "学校では設計を学んでいたので測量は未経験でしたが、先輩がマンツーマンで教えてくれ、現場で測ったデータが図面になる瞬間にハマりました。",
  },
  {
    name: "S.H.（入社2年目／第二新卒）",
    college: "文系大学 卒・営業職から転職",
    quote:
      "屋外で体を動かす仕事がしたくて転職。最初は専門用語にとまどいましたが、研修と国家資格取得の支援が手厚く、半年で測量士補に合格できました。",
  },
  {
    name: "T.N.（入社4年目／新卒）",
    college: "農学部 卒",
    quote:
      "ドローンや3Dスキャナを動かす仕事は、想像以上にクリエイティブ。自分の操作したデータが市の都市計画に使われたときは震えました。",
  },
];

export default function Voices() {
  return (
    <section id="voice" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold text-center">
            EMPLOYEE VOICE
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
            先輩たちのリアル
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid md:grid-cols-3 gap-6">
          {voices.map((v) => (
            <StaggerItem key={v.name}>
              <motion.figure
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="rounded-2xl bg-sand p-7 border border-navy/10 h-full"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-navy mb-5 grid place-items-center text-white font-serif">
                  {v.name.charAt(0)}
                </div>
                <blockquote className="text-sm text-navy/80 leading-relaxed">
                  「{v.quote}」
                </blockquote>
                <figcaption className="mt-5 text-xs text-navy/60">
                  <p className="font-bold text-navy text-sm">{v.name}</p>
                  {v.college}
                </figcaption>
              </motion.figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
