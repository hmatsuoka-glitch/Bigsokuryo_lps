"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

type Track = "new" | "mid";

const flows: Record<
  Track,
  {
    title: string;
    note: string;
    accent: string;
    steps: { n: string; label: string; body: string; final?: boolean }[];
  }
> = {
  new: {
    title: "新卒採用",
    note: "人柄重視。筆記試験・適性検査はありません。",
    accent: "bg-navy",
    steps: [
      {
        n: "01",
        label: "1次選考　コミュニケーション考査",
        body: "人事担当との対話。実技体験あり（評価対象は姿勢・協調性）。",
      },
      {
        n: "02",
        label: "2次選考　工事測量講話",
        body: "現場管理者からの講話で会社理解を深めます。",
      },
      {
        n: "03",
        label: "3次選考　個別面接",
        body: "現場管理者と1対1で面接。現場のリアルもお伝えします。",
      },
      {
        n: "04",
        label: "最終選考　社長面接",
        body: "代表との個別面接。お互いの未来観を確かめる場。",
      },
      {
        n: "★",
        label: "内定",
        body: "内定通知を郵送いたします。",
        final: true,
      },
    ],
  },
  mid: {
    title: "中途採用",
    note: "入社時期はご相談に応じます。",
    accent: "bg-gold",
    steps: [
      {
        n: "01",
        label: "1次面接　現場責任者",
        body: "現場責任者との個別面接。これまでの経験と強みを伺います。",
      },
      {
        n: "02",
        label: "最終面接　部署責任者",
        body: "部署責任者との個別面接。配属イメージのすり合わせも。",
      },
      {
        n: "★",
        label: "内定",
        body: "内定通知を郵送いたします。",
        final: true,
      },
    ],
  },
};

export default function SelectionFlow() {
  const [track, setTrack] = useState<Track>("new");
  const current = flows[track];

  return (
    <section id="flow" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-dark text-center font-bold">
            SELECTION FLOW
          </p>
          <h2 className="mt-3 font-sans font-black text-4xl md:text-5xl text-navy text-center heading-display">
            採用フロー
          </h2>
          <p className="mt-5 text-center text-sm md:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            ありのままのあなたで臨める選考です。
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-7 h-px w-16 bg-gold origin-left"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-12 mx-auto inline-flex p-1.5 bg-sand border border-navy/10 shadow-soft"
        >
          <div className="relative flex gap-1">
            {(
              [
                { id: "new", label: "新卒採用" },
                { id: "mid", label: "中途採用" },
              ] as { id: Track; label: string }[]
            ).map((t) => {
              const active = track === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTrack(t.id)}
                  className={`relative px-7 py-3 text-xs md:text-sm tracking-[0.2em] font-bold transition-colors ${
                    active ? "text-white" : "text-zinc-600 hover:text-navy"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="flow-track-pill"
                      className="absolute inset-0 bg-navy shadow-soft"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={track}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-10"
          >
            <div className="border border-navy/10 shadow-soft p-6 md:p-10 bg-gradient-to-b from-white to-sand">
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h3 className="font-sans font-bold text-2xl md:text-3xl text-navy heading-display">
                  {current.title}
                </h3>
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${current.accent}`}
                />
              </div>
              <p className="mt-1 text-xs md:text-sm text-zinc-500">
                {current.note}
              </p>

              <StaggerGroup className="mt-7 relative">
                <span
                  aria-hidden
                  className="absolute left-[15px] top-2 bottom-2 w-px bg-navy/15"
                />
                <ol className="space-y-5 relative">
                  {current.steps.map((s) => (
                    <StaggerItem key={s.n}>
                      <li className="relative pl-12">
                        <span
                          className={`absolute left-0 top-0 w-8 h-8 rounded-full text-white text-[11px] grid place-items-center font-bold shadow-soft ${
                            s.final ? "bg-gold" : "bg-navy"
                          }`}
                        >
                          {s.n}
                        </span>
                        <p className="font-sans font-bold text-navy text-sm md:text-base">
                          {s.label}
                        </p>
                        <p className="mt-1 text-xs md:text-sm text-zinc-600 leading-relaxed">
                          {s.body}
                        </p>
                      </li>
                    </StaggerItem>
                  ))}
                </ol>
              </StaggerGroup>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
