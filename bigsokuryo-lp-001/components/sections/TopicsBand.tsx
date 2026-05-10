"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const topics = [
  {
    date: "2025.07.24",
    label: "AWARD",
    title: "「健康企業宣言」で『銀の認定』を取得",
  },
  {
    date: "2025.05.01",
    label: "INTERN",
    title: "【27卒向け】5月からインターン開催",
  },
  {
    date: "2025.02.26",
    label: "EVENT",
    title: "3月より26卒向け会社説明会を開催",
  },
  {
    date: "2025.01.15",
    label: "EVENT",
    title: "内定者懇親会を開催",
  },
];

export default function TopicsBand() {
  return (
    <section id="topics" className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="flex items-baseline justify-between flex-wrap gap-3">
            <div>
              <p className="text-xs tracking-[0.5em] text-gold-dark font-bold">
                TOPICS
              </p>
              <h2 className="mt-2 font-sans font-black text-2xl md:text-3xl text-navy heading-display">
                最近のお知らせ
              </h2>
            </div>
            <span className="text-[11px] text-navy/55">
              人事ブログより抜粋
            </span>
          </div>
        </Reveal>

        <StaggerGroup className="mt-8 divide-y divide-navy/10 border-y border-navy/10">
          {topics.map((t) => (
            <StaggerItem key={t.title}>
              <article className="grid grid-cols-[auto_auto_1fr] items-center gap-3 md:gap-6 py-4 hover:bg-sand/40 transition-colors px-2 -mx-2">
                <time className="text-[11px] md:text-xs text-navy/55 tabular-nums tracking-wider">
                  {t.date}
                </time>
                <span className="text-[10px] md:text-[11px] tracking-[0.3em] font-bold text-navy bg-sand px-2.5 py-1">
                  {t.label}
                </span>
                <p className="text-sm md:text-base text-navy/85 leading-relaxed">
                  {t.title}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
