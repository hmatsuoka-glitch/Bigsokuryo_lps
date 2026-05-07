"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/Motion";
import { COMPANY } from "@/lib/site";

type Track = "new" | "mid";

const accessLines = COMPANY.access.join(" / ");

const summary: Record<Track, { stat: string; label: string }[]> = {
  new: [
    { stat: "210,000円〜", label: "月給（大卒）" },
    { stat: "340万円", label: "1年目年収実績" },
    { stat: "年2回", label: "賞与（計2か月）" },
    { stat: "120日+", label: "年間休日目安" },
  ],
  mid: [
    { stat: "210,000円〜", label: "月給（経験考慮）" },
    { stat: "520万円", label: "30歳5年目年収" },
    { stat: "3か月", label: "試用期間（待遇変更なし）" },
    { stat: "随時", label: "入社時期相談可" },
  ],
};

const dataset: Record<
  Track,
  { label: string; rows: { k: string; v: React.ReactNode }[] }
> = {
  new: {
    label: "新卒採用：測量アシスタント（正社員）",
    rows: [
      { k: "募集対象", v: "2027年卒業学生" },
      { k: "勤務地", v: COMPANY.address },
      { k: "アクセス", v: accessLines },
      {
        k: "勤務時間",
        v: (
          <div className="space-y-1">
            <p>8:00〜17:00（実働8h／休憩60分）</p>
            <p>20:00〜翌5:00（実働8h／休憩60分）</p>
            <p className="text-xs text-navy/55">※夜勤は短縮労働あり</p>
          </div>
        ),
      },
      {
        k: "給与",
        v: (
          <div className="space-y-1">
            <p>大学卒　月給 210,000円</p>
            <p>専門学校卒　月給 207,000円</p>
            <p>高等学校卒　月給 205,000円</p>
            <p className="text-xs text-navy/55">大卒1年目年収実績 340万円</p>
          </div>
        ),
      },
      { k: "賞与", v: "年2回（7月15日・12月15日）／計2か月分" },
      { k: "昇給", v: "年1回（4月）" },
      {
        k: "休日休暇",
        v: "土・日・祝／夏季休暇（8/10〜15）／GW／年末年始（12/30〜1/5）／慶弔特別休暇",
      },
      { k: "保険", v: "健康保険・厚生年金保険・雇用保険・労災保険" },
    ],
  },
  mid: {
    label: "中途採用：測量アシスタント（正社員）",
    rows: [
      {
        k: "募集対象",
        v: "高校・専門学校・大学 既卒者（経験者優遇）",
      },
      { k: "勤務地", v: COMPANY.address },
      { k: "アクセス", v: accessLines },
      {
        k: "勤務時間",
        v: (
          <div className="space-y-1">
            <p>8:00〜17:00（実働8h／休憩60分）</p>
            <p>20:00〜翌5:00（実働8h／休憩60分）</p>
          </div>
        ),
      },
      {
        k: "給与",
        v: (
          <div className="space-y-1">
            <p>月給 210,000円以上（前職・経験を考慮）</p>
            <p className="text-xs text-navy/55">試用期間3ヶ月（待遇変更なし）</p>
            <p className="text-xs text-navy/55">
              30歳経験者年収実績：1年目390万／2年目470万／3年目500万／5年目520万
            </p>
          </div>
        ),
      },
      { k: "昇給", v: "年1回（4月）" },
      {
        k: "休日休暇",
        v: "土・日・祝／夏季（8/10〜15）／GW／年末年始（12/28〜1/5）／慶弔特別休暇",
      },
      { k: "保険", v: "健康保険・厚生年金保険・雇用保険・労災保険" },
    ],
  },
};

export default function JobRequirements() {
  const [track, setTrack] = useState<Track>("new");
  const current = dataset[track];

  return (
    <section id="requirements" className="py-24 md:py-32 bg-sand">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-dark text-center font-bold">
            JOB REQUIREMENTS
          </p>
          <h2 className="mt-3 font-sans font-black text-4xl md:text-5xl text-navy text-center heading-display">
            募集要項
          </h2>
          <p className="mt-5 text-center text-sm md:text-base text-navy/70">
            新卒・中途の2トラックでお迎えしています。気になる方を選んでご覧ください。
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
          className="mt-12 mx-auto inline-flex p-1.5 bg-white rounded-full border border-navy/10 shadow-soft"
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
                  className={`relative px-7 py-3 text-xs md:text-sm tracking-[0.2em] font-bold transition-colors rounded-full ${
                    active ? "text-white" : "text-navy/65 hover:text-navy"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="track-pill"
                      className="absolute inset-0 bg-navy rounded-full shadow-soft"
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
          >
            <p className="mt-10 text-center text-sm text-navy/70">
              {current.label}
            </p>

            {/* Quick summary stats */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {summary[track].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl border border-navy/10 shadow-soft p-4 hover-lift transition-all duration-500 text-center"
                >
                  <p className="font-sans font-black text-xl md:text-2xl text-navy tabular-nums">
                    {s.stat}
                  </p>
                  <p className="mt-1 text-[10px] tracking-widest text-navy/55">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-2xl border border-navy/10 shadow-soft overflow-hidden divide-y divide-navy/10">
              {current.rows.map((r) => (
                <div
                  key={r.k}
                  className="grid md:grid-cols-[200px_1fr] gap-4 px-6 md:px-8 py-5 hover:bg-sand/50 transition-colors"
                >
                  <dt className="text-xs md:text-sm tracking-widest text-gold-dark font-bold pt-0.5">
                    {r.k}
                  </dt>
                  <dd className="text-sm md:text-base text-navy/90 leading-loose">
                    {r.v}
                  </dd>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
