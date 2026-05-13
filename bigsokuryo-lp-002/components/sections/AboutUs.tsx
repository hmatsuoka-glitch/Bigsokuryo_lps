"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedNumber from "@/components/AnimatedNumber";
import Reveal from "@/components/Reveal";

type Stat = {
  eyebrow: string;
  value: number;
  decimals?: number;
  unit: string;
  unitSub?: string;
  label: string;
  desc: string;
  percent: number;
  icon: React.ReactNode;
};

const Calendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" />
  </svg>
);
const Users = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const Clock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const stats: Stat[] = [
  {
    eyebrow: "FOUNDED / 創業",
    value: 1980,
    unit: ".10",
    label: "1980 年創業",
    desc: "45 年目の挑戦中。鉄道工事測量を起点に東京の重要インフラを支えてきました。",
    percent: 90,
    icon: <Calendar />,
  },
  {
    eyebrow: "EMPLOYEES / 社員数",
    value: 163,
    unit: "名",
    label: "163 名の技術集団",
    desc: "'24 年 3 月時点。測量士・施工管理技士・解析エンジニアが集結。",
    percent: 75,
    icon: <Users />,
  },
  {
    eyebrow: "PAID LEAVE / 有給取得率",
    value: 79.9,
    decimals: 1,
    unit: "%",
    label: "有給は当たり前に取れる",
    desc: "完全週休 2 日制 + 健康企業宣言「銀の認定」(2025/7) 取得。",
    percent: 79.9,
    icon: <Clock />,
  },
];

function Gauge({
  percent,
  children,
}: {
  percent: number;
  children: React.ReactNode;
}) {
  const ref = useRef<SVGCircleElement>(null);
  const [drawn, setDrawn] = useState(false);
  const r = 56;
  const c = 2 * Math.PI * r;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-32 h-32 md:w-36 md:h-36">
      <svg viewBox="0 0 128 128" className="w-full h-full -rotate-90">
        <circle
          cx="64"
          cy="64"
          r={r}
          fill="none"
          stroke="rgba(0,0,0,0.06)"
          strokeWidth="6"
        />
        <circle
          ref={ref}
          cx="64"
          cy="64"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={drawn ? c * (1 - percent / 100) : c}
          style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-brand">
        {children}
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-sand/40">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-brand">ABOUT US</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            数字で見るビック測量
          </h2>
          <p className="mt-5 text-sm md:text-base text-black/70 max-w-xl mx-auto leading-relaxed">
            社員のリアルを、数字で。<br className="sm:hidden" />
            カルチャー・働き方・成長を、定量的にひもときます。
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {stats.map((s, i) => (
            <Reveal
              key={s.eyebrow}
              delay={i * 120}
              className="bg-white border border-navy/10 p-6 md:p-8 flex flex-col items-center text-center"
            >
              <Gauge percent={s.percent}>{s.icon}</Gauge>

              <p className="mt-6 text-[10px] md:text-xs tracking-[0.25em] text-black/55">
                {s.eyebrow}
              </p>

              <p className="mt-3 text-4xl md:text-5xl font-bold text-navy tracking-tight leading-none">
                <AnimatedNumber end={s.value} decimals={s.decimals ?? 0} />
                <span className="text-sm md:text-base ml-1 text-black/55">
                  {s.unit}
                </span>
              </p>

              <p className="mt-4 font-bold text-navy text-base md:text-lg">
                {s.label}
              </p>
              <p className="mt-2 text-xs md:text-sm text-black/70 leading-relaxed">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
