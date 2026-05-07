"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const stats: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  caption: string;
}[] = [
  {
    value: 45,
    suffix: "年",
    label: "歴史",
    caption: "1980年創業／東京・上野",
  },
  {
    value: 163,
    suffix: "名",
    label: "社員数",
    caption: "2024年3月現在",
  },
  {
    value: 0.001,
    suffix: "mm",
    label: "計測精度",
    caption: "1ミクロンの特許技術",
  },
  {
    value: 79.9,
    suffix: "%",
    label: "有給取得率",
    caption: "繁忙期含む直近実績",
  },
  {
    value: 520,
    suffix: "万円",
    label: "30歳・5年目年収",
    caption: "経験者中途実績",
  },
  {
    value: 36,
    suffix: "名",
    label: "測量士",
    caption: "ほか測量士補49名",
  },
  {
    value: 55,
    suffix: "台",
    label: "トータルステーション",
    caption: "レベル55台、GNSS5台",
  },
  {
    value: 1,
    suffix: "",
    label: "健康企業宣言",
    caption: "『銀の認定』取得（2025）",
  },
];

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  if (stat.value === 0.001) {
    // ミクロン精度のみ装飾を変える
    return (
      <div className="bg-white rounded-2xl p-6 border border-navy/10 hover:-translate-y-1 transition-transform">
        <p className="text-xs text-navy/60">{stat.label}</p>
        <p className="mt-2 font-serif text-3xl font-bold text-navy">
          0.001<span className="text-base">mm</span>
        </p>
        <p className="mt-2 text-[11px] text-navy/55 leading-snug">
          {stat.caption}
        </p>
      </div>
    );
  }
  if (stat.label === "健康企業宣言") {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-200 hover:-translate-y-1 transition-transform">
        <p className="text-xs text-navy/60">{stat.label}</p>
        <p className="mt-2 font-serif text-3xl font-bold text-amber-700">
          銀の認定
        </p>
        <p className="mt-2 text-[11px] text-navy/55 leading-snug">
          {stat.caption}
        </p>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-2xl p-6 border border-navy/10 hover:-translate-y-1 transition-transform">
      <p className="text-xs text-navy/60">{stat.label}</p>
      <p className="mt-2 font-serif text-3xl font-bold text-navy">
        <AnimatedCounter to={stat.value} suffix={stat.suffix} />
      </p>
      <p className="mt-2 text-[11px] text-navy/55 leading-snug">
        {stat.caption}
      </p>
    </div>
  );
}

export default function StatsNumbers() {
  return (
    <section id="numbers" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold text-center">
            BY THE NUMBERS
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
            数字で見るビッグ測量
          </h2>
          <p className="mt-4 text-center text-sm text-navy/65">
            創業から積み上げてきた、技術と環境のたしかな指標。
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <StatCard stat={s} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
