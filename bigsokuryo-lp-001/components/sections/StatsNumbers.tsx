"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

type Stat = {
  value: number;
  suffix?: string;
  display?: React.ReactNode;
  decimals?: number;
  label: string;
  caption: string;
  icon: React.ReactNode;
  highlight?: boolean;
};

const stats: Stat[] = [
  {
    value: 45,
    suffix: "年",
    label: "歴史",
    caption: "1980年創業／東京・上野",
    icon: <IconHistory />,
  },
  {
    value: 163,
    suffix: "名",
    label: "社員数",
    caption: "2024年3月現在",
    icon: <IconUsers />,
  },
  {
    value: 0.001,
    suffix: "mm",
    decimals: 3,
    label: "計測精度",
    caption: "1ミクロンの特許技術",
    icon: <IconPrecision />,
    highlight: true,
  },
  {
    value: 79.9,
    suffix: "%",
    decimals: 1,
    label: "有給取得率",
    caption: "繁忙期含む直近実績",
    icon: <IconLeaf />,
  },
  {
    value: 520,
    suffix: "万円",
    label: "30歳・5年目年収",
    caption: "経験者中途実績",
    icon: <IconCoin />,
  },
  {
    value: 36,
    suffix: "名",
    label: "測量士",
    caption: "ほか測量士補49名",
    icon: <IconCertificate />,
  },
  {
    value: 55,
    suffix: "台",
    label: "トータルステーション",
    caption: "レベル55台、GNSS5台",
    icon: <IconScope />,
  },
  {
    value: 1,
    display: <span className="text-navy-dark">銀の認定</span>,
    label: "健康企業宣言",
    caption: "2025年7月取得",
    icon: <IconShield />,
  },
];

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div
      className={`group relative bg-white  p-5 md:p-6 border transition-all duration-500 overflow-hidden h-full flex flex-col ${
        stat.highlight
          ? "border-gold/40 shadow-gold/30"
          : "border-navy/10 shadow-soft"
      } hover-lift`}
    >
      {/* hover glow */}
      <span
        aria-hidden
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500 blur-2xl"
      />
      {/* top accent */}
      <span
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold transition-colors duration-500"
      />

      <div className="relative flex items-start justify-between gap-2">
        <p className="text-[11px] text-navy/60 tracking-widest font-bold truncate">
          {stat.label}
        </p>
        <span className="text-gold/70 group-hover:text-gold group-hover:scale-110 transition shrink-0">
          {stat.icon}
        </span>
      </div>

      <p className="relative mt-3 font-sans font-black text-2xl md:text-3xl lg:text-[2rem] text-navy tabular-nums leading-tight whitespace-nowrap">
        {stat.display ?? (
          <AnimatedCounter
            to={stat.value}
            suffix={stat.suffix}
            decimals={stat.decimals}
          />
        )}
      </p>
      <p className="relative mt-3 text-xs text-navy/55 leading-relaxed mt-auto pt-3">
        {stat.caption}
      </p>
    </div>
  );
}

export default function StatsNumbers() {
  return (
    <section id="numbers" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-dark text-center font-bold">
            BY THE NUMBERS
          </p>
          <h2 className="mt-3 font-sans font-black text-4xl md:text-5xl text-navy text-center heading-display">
            数字で見るビッグ測量
          </h2>
          <p className="mt-5 text-center text-sm md:text-base text-navy/70 max-w-xl mx-auto leading-relaxed">
            技術と環境を、確かな指標で。
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-7 h-px w-16 bg-gold origin-left"
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="h-full">
              <StatCard stat={s} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* --- Icons (24x24 stroke style) --- */

function IconBase({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}
function IconHistory() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </IconBase>
  );
}
function IconUsers() {
  return (
    <IconBase>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
      <path d="M15 20c0-2 1.5-3.5 3.5-3.5S22 18 22 20" />
    </IconBase>
  );
}
function IconPrecision() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </IconBase>
  );
}
function IconLeaf() {
  return (
    <IconBase>
      <path d="M5 19c0-7 5-13 14-13 0 9-5 14-14 14" />
      <path d="M5 19c2-4 6-7 11-9" />
    </IconBase>
  );
}
function IconCoin() {
  return (
    <IconBase>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
      <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </IconBase>
  );
}
function IconCertificate() {
  return (
    <IconBase>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 10h8M8 14h5" />
      <circle cx="17" cy="14" r="2" />
    </IconBase>
  );
}
function IconScope() {
  return (
    <IconBase>
      <path d="M12 3v3" />
      <path d="M12 21v-3" />
      <circle cx="12" cy="12" r="6" />
      <path d="M12 8v8M8 12h8" />
    </IconBase>
  );
}
function IconShield() {
  return (
    <IconBase>
      <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </IconBase>
  );
}
