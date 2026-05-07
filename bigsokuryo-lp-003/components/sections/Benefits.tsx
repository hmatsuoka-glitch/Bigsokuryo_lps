"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const groups = [
  {
    label: "給与",
    icon: "💴",
    items: [
      ["初任給（大卒）", "月給 210,000円"],
      ["初任給（専門卒）", "月給 207,000円"],
      ["初任給（高卒）", "月給 205,000円"],
      ["1年目年収実績", "340万円（大卒）"],
      ["賞与", "年2回（7月／12月）計2か月"],
      ["昇給", "年1回（4月）"],
    ],
  },
  {
    label: "諸手当",
    icon: "🎁",
    items: [
      ["残業手当", "全額支給"],
      ["深夜・休日手当", "給与÷20日×1.25"],
      ["夜食手当", "夜勤1日につき1,000円"],
      ["運転手当", "現場運転時に支給"],
      ["住宅手当", "持ち家2万円／借家1.5万円"],
      ["家族手当", "配偶者5千円／子1万円（1名）"],
      ["資格手当", "測量士1.5万円・技術士10万円 ほか"],
      ["職務手当", "主任1万〜課長10万円"],
    ],
  },
  {
    label: "休日・支援",
    icon: "🌿",
    items: [
      ["休日", "完全週休2日（土日祝）"],
      ["年間休日", "夏季・年末年始・GW・慶弔休"],
      ["有給取得率", "79.9%（執行役員談）"],
      ["社員寮", "単身1R／月3万円"],
      ["保養所", "新潟県湯沢"],
      ["資格支援", "測量士・補の試験費用を会社負担"],
      ["健康支援", "有資格者による無料マッサージ"],
      ["産休・育休", "制度あり（女性支援強化）"],
    ],
  },
];

const highlights: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}[] = [
  { to: 340, suffix: "万円", label: "1年目年収実績" },
  { to: 520, suffix: "万円", label: "30歳経験者・5年目年収" },
  { to: 79.9, suffix: "%", decimals: 1, label: "有給取得率" },
  { to: 10, suffix: "万円", label: "資格手当（技術士・最大）" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-28 bg-white overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-emerald-50 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-emerald-700 font-bold">
            BENEFITS
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy font-bold tracking-tight">
            数字で見る、<span className="text-emerald-700">安心</span>。
          </h2>
          <p className="mt-5 text-sm md:text-base text-navy/70 max-w-xl mx-auto leading-[1.9]">
            給与・諸手当・休日・支援制度。長く続けられる仕組みを、まとめて公開しています。
          </p>
        </Reveal>

        {/* highlight numbers */}
        <StaggerGroup className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <StaggerItem key={h.label}>
              <div className="group bg-gradient-to-br from-emerald-700 to-teal-800 p-5 md:p-6 text-white shadow-lg shadow-emerald-700/20 hover:shadow-2xl hover:shadow-emerald-700/40 hover:-translate-y-1 transition-all duration-500">
                <p className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
                  <AnimatedCounter
                    to={h.to}
                    prefix={h.prefix}
                    suffix={h.suffix}
                    decimals={h.decimals}
                  />
                </p>
                <p className="mt-2 text-[11px] tracking-widest text-emerald-100/85">
                  {h.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* detailed groups */}
        <StaggerGroup className="mt-16 grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <StaggerItem key={g.label}>
              <div className="h-full bg-sand/40 border border-emerald-700/10 p-6 hover:border-emerald-600/40 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{g.icon}</span>
                  <h3 className="text-xs tracking-[0.3em] text-emerald-700 font-bold">
                    {g.label.toUpperCase()}
                  </h3>
                </div>
                <dl className="divide-y divide-emerald-700/15 border-t border-emerald-700/15">
                  {g.items.map(([k, v]) => (
                    <div key={k} className="py-3.5">
                      <dt className="text-[11px] tracking-widest text-navy/50">
                        {k}
                      </dt>
                      <dd className="mt-1 text-sm text-navy font-medium">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal>
          <p className="mt-12 text-center text-xs text-navy/50">
            ※ 健康企業宣言「銀の認定」取得（2025年7月）
          </p>
        </Reveal>
      </div>
    </section>
  );
}
