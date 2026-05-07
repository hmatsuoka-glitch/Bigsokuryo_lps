"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/Motion";

const faqs = [
  {
    q: "理系・建築系以外でも応募できますか？",
    a: "もちろんです。実際に文系出身の若手が約半数を占めています。研修制度を整えているので、未経験から問題なくスタートできます。",
  },
  {
    q: "配属先はどう決まりますか？",
    a: "入社後の研修と本人の希望、適性を踏まえて決定します。U・Iターン希望の方は出身地優先での配属も可能です。",
  },
  {
    q: "現場と内勤、どちらが多いですか？",
    a: "1〜2年目は外業6:内業4ほど、その後は専門領域に応じて変わります。点群処理やCAD作業を中心とする社員もいます。",
  },
  {
    q: "選考前にカジュアル面談はできますか？",
    a: "可能です。エントリーフォームの自由記述欄、もしくは公式LINEから「カジュアル面談希望」とお伝えください。オンライン30分から対応します。",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-sand">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold text-center">FAQ</p>
          <h2 className="mt-3 font-serif text-3xl text-navy text-center">
            よくある質問
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-navy/10 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full px-6 py-5 flex justify-between items-center text-navy font-bold text-left"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-gold text-xl leading-none"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm text-navy/70 leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
