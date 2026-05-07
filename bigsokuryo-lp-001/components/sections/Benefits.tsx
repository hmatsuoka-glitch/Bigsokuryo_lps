"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const allowances = [
  ["交通費", "全額支給"],
  ["残業手当", "全額支給"],
  ["深夜勤務手当", "給与÷20日×1.25"],
  ["休日出勤手当", "給与÷20日×1.25"],
  ["職務手当", "主任 1万円／係長 2万円／課長補佐 3万円／課長 10万円"],
  ["運転手当", "現場への運転時は残業代として支給"],
  ["夜食手当", "夜勤作業1日につき1,000円"],
  ["住宅手当", "持家2万円（配偶者あり）／借家1.5万円"],
  ["家族手当", "配偶者5,000円／月、子ども10,000円／月（1名につき）"],
  [
    "資格手当",
    "測量士1.5万円／測量士補5,000円／1級土木施工管理技士1万円／技術士10万円／技術士補5,000円（すべて月額）",
  ],
];

const welfare: { title: string; body: string; icon: React.ReactNode }[] = [
  {
    title: "資格支援制度",
    body: "測量士・測量士補の合格時、試験費用を会社が負担。",
    icon: <IconBook />,
  },
  {
    title: "社員寮完備",
    body: "単身用1Rを月額3万円で利用可能。",
    icon: <IconHome />,
  },
  {
    title: "保養所",
    body: "新潟・湯沢の保養所を社員価格で利用できます。",
    icon: <IconMountain />,
  },
  {
    title: "作業着・備品貸与",
    body: "電卓・事務用品まで、本人負担なしで全て会社貸与。",
    icon: <IconBag />,
  },
  {
    title: "社内勉強会",
    body: "技術向上を目的とした勉強会を年2回開催。",
    icon: <IconLight />,
  },
  {
    title: "有給取得率 79.9%",
    body: "繁忙期を含めて取得しやすい体制を継続中。",
    icon: <IconClock />,
  },
  {
    title: "無料マッサージ",
    body: "有資格者によるマッサージを社内で受けられます。",
    icon: <IconHand />,
  },
  {
    title: "産休・育休制度",
    body: "女性社員の継続就業を会社として全力でサポート。",
    icon: <IconHeart />,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-dark text-center font-bold">
            BENEFITS
          </p>
          <h2 className="mt-3 font-sans font-black text-4xl md:text-5xl text-navy text-center heading-display">
            福利厚生・諸手当
          </h2>
          <p className="mt-5 text-center text-sm md:text-base text-navy/70 max-w-xl mx-auto leading-relaxed">
            手当の充実度と、暮らしを支える制度。
            <br className="md:hidden" />
            働き続けられる環境にこだわっています。
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-7 h-px w-16 bg-gold origin-left"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="bg-sand rounded-2xl border border-navy/10 shadow-soft overflow-hidden">
            <div className="px-6 md:px-10 pt-7 pb-3 flex items-baseline justify-between flex-wrap gap-2">
              <p className="text-xs tracking-[0.4em] text-gold-dark font-bold">
                ALLOWANCES
              </p>
              <p className="text-[11px] text-navy/55">
                諸手当（新卒・中途共通）
              </p>
            </div>
            <dl className="divide-y divide-navy/10 px-6 md:px-10 pb-3">
              {allowances.map(([k, v]) => (
                <div
                  key={k}
                  className="grid md:grid-cols-[200px_1fr] gap-3 py-4 text-sm md:text-base hover:bg-white/60 transition-colors -mx-2 px-2 rounded"
                >
                  <dt className="text-navy/65 tracking-widest text-xs md:text-sm font-bold">
                    {k}
                  </dt>
                  <dd className="text-navy/90 leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <p className="text-xs tracking-[0.4em] text-gold-dark font-bold">
            WELFARE
          </p>
          <h3 className="mt-2 font-sans font-bold text-2xl md:text-3xl text-navy heading-display">
            福利厚生・社内制度
          </h3>
        </Reveal>

        <StaggerGroup className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {welfare.map((w) => (
            <StaggerItem key={w.title}>
              <div className="group bg-sand rounded-2xl p-6 border border-navy/10 shadow-soft hover-lift hover:border-gold/40 transition-all duration-500 h-full">
                <span className="inline-flex w-11 h-11 rounded-full bg-white grid place-items-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                  {w.icon}
                </span>
                <p className="mt-4 font-sans font-bold text-base text-navy heading-display">
                  {w.title}
                </p>
                <p className="mt-2 text-xs text-navy/70 leading-relaxed">
                  {w.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

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
function IconBook() {
  return (
    <IconBase>
      <path d="M4 5a2 2 0 012-2h12v18H6a2 2 0 01-2-2V5z" />
      <path d="M4 19h14" />
    </IconBase>
  );
}
function IconHome() {
  return (
    <IconBase>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 9v11h14V9" />
      <path d="M10 20v-6h4v6" />
    </IconBase>
  );
}
function IconMountain() {
  return (
    <IconBase>
      <path d="M3 19l6-10 4 6 3-4 5 8z" />
    </IconBase>
  );
}
function IconBag() {
  return (
    <IconBase>
      <path d="M5 8h14l-1 12H6z" />
      <path d="M9 8V5a3 3 0 016 0v3" />
    </IconBase>
  );
}
function IconLight() {
  return (
    <IconBase>
      <path d="M9 18h6M10 22h4" />
      <path d="M12 2a6 6 0 00-3 11l1 3h4l1-3a6 6 0 00-3-11z" />
    </IconBase>
  );
}
function IconClock() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </IconBase>
  );
}
function IconHand() {
  return (
    <IconBase>
      <path d="M7 10V5a2 2 0 014 0v5" />
      <path d="M11 10V4a2 2 0 014 0v6" />
      <path d="M15 10V6a2 2 0 014 0v8a7 7 0 01-14 0v-3l-2-1 2-3a3 3 0 014 0" />
    </IconBase>
  );
}
function IconHeart() {
  return (
    <IconBase>
      <path d="M12 21s-7-4.5-7-10a4 4 0 017-2 4 4 0 017 2c0 5.5-7 10-7 10z" />
    </IconBase>
  );
}
