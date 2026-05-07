"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const flows = [
  {
    title: "新卒採用",
    note: "人柄重視。筆記試験・適性検査はありません。",
    accent: "bg-sky-500",
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
  {
    title: "中途採用",
    note: "入社時期はご相談に応じます。",
    accent: "bg-amber-600",
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
];

export default function SelectionFlow() {
  return (
    <section id="flow" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-dark text-center font-bold">
            SELECTION FLOW
          </p>
          <h2 className="mt-3 font-sans font-black text-4xl md:text-5xl text-navy text-center heading-display">
            採用フロー
          </h2>
          <p className="mt-5 text-center text-sm md:text-base text-navy/70 max-w-xl mx-auto leading-relaxed">
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

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {flows.map((f) => (
            <Reveal key={f.title}>
              <div className="rounded-2xl border border-navy/10 shadow-soft p-7 md:p-8 bg-gradient-to-b from-white to-sand h-full hover-lift transition-all duration-500">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-sans font-bold text-2xl md:text-3xl text-navy heading-display">
                    {f.title}
                  </h3>
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${f.accent}`}
                  />
                </div>
                <p className="mt-1 text-xs text-navy/55">{f.note}</p>

                <StaggerGroup className="mt-7 relative">
                  <span
                    aria-hidden
                    className="absolute left-[15px] top-2 bottom-2 w-px bg-navy/15"
                  />
                  <ol className="space-y-5 relative">
                    {f.steps.map((s) => (
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
                          <p className="mt-1 text-xs md:text-sm text-navy/70 leading-relaxed">
                            {s.body}
                          </p>
                        </li>
                      </StaggerItem>
                    ))}
                  </ol>
                </StaggerGroup>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <div className="rounded-2xl bg-sand border border-navy/10 px-6 py-5 text-center text-sm md:text-base text-navy/80">
            選考に関するお問い合わせは、
            <a
              href="mailto:saiyou@bigsdc.co.jp"
              className="text-gold-dark font-bold underline-grow"
            >
              saiyou@bigsdc.co.jp
            </a>
            （人事部 須藤）まで。
          </div>
        </Reveal>
      </div>
    </section>
  );
}
