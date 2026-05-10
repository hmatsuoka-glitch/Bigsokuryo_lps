"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

type Merit = {
  no: string;
  tag: string;
  title: string;
  caption: string;
  points: string[];
  icon: React.ReactNode;
};

const merits: Merit[] = [
  {
    no: "01",
    tag: "TECHNOLOGY",
    title: "業界でも限られた、最先端設備",
    caption:
      "1ミクロン精度の特許技術、3Dレーザースキャナ、レーザートラッカー。普通は触れない機材を、最初から扱える。",
    points: [
      "特許「構造物上の基準点測量方法」",
      "3Dレーザー / 写真測量 / 3DCG",
      "鉄道・空港・トンネルの大型現場",
    ],
    icon: <IconScope />,
  },
  {
    no: "02",
    tag: "GROWTH",
    title: "育てる文化が、会社にある",
    caption:
      "「目で見て盗め」ではなく、理論を言葉で。半年で一通りの業務を覚えられる教育体制で、文系・未経験からでも踏み出せます。",
    points: [
      "資格試験費用 全額会社負担",
      "社内勉強会 年2回",
      "先輩がとことん付き合う風土",
    ],
    icon: <IconBook />,
  },
  {
    no: "03",
    tag: "WELL-BEING",
    title: "頑張りが、暮らしに返ってくる",
    caption:
      "資格手当は最大月10万円、社員寮は月3万円、保養所も完備。働いた分だけ返ってくる仕組みが整っています。",
    points: [
      "資格手当 最大 月10万円",
      "社員寮 月3万円 / 保養所(湯沢)",
      "有給取得率 79.9%",
    ],
    icon: <IconHeart />,
  },
];

export default function Merits() {
  return (
    <section id="merits" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-dark text-center font-bold">
            WHY BIG SOKURYO
          </p>
          <h2 className="mt-3 font-sans font-black text-4xl md:text-5xl text-navy text-center heading-display">
            ビック測量で働く、
            <br className="md:hidden" />
            3つのメリット
          </h2>
          <p className="mt-5 text-center text-sm md:text-base text-navy/70 max-w-xl mx-auto leading-relaxed">
            技術・育成・暮らし。3つの軸で、長く続けられる仕事を。
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-7 h-px w-16 bg-gold origin-left"
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {merits.map((m) => (
            <StaggerItem key={m.no} className="h-full">
              <article className="group relative bg-sand p-6 md:p-8 border border-navy/10 shadow-soft h-full flex flex-col overflow-hidden hover-lift hover:border-gold/40 transition-all duration-500">
                <span
                  aria-hidden
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gold/0 group-hover:bg-gold/15 transition-colors duration-700 blur-3xl"
                />
                <span
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                />

                <div className="relative flex items-start justify-between">
                  <span className="text-gold/80 group-hover:text-gold transition-colors">
                    {m.icon}
                  </span>
                  <span className="text-[10px] tracking-[0.3em] text-navy/40 font-bold">
                    {m.no} / {m.tag}
                  </span>
                </div>

                <h3 className="relative mt-5 font-sans font-bold text-lg md:text-xl text-navy leading-snug heading-display">
                  {m.title}
                </h3>
                <p className="relative mt-3 text-sm text-navy/80 leading-relaxed">
                  {m.caption}
                </p>
                <ul className="relative mt-5 space-y-2 pt-5 border-t border-navy/10">
                  {m.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-xs md:text-sm text-navy/85"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* --- Icons --- */

function IconBase({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function IconScope() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </IconBase>
  );
}

function IconBook() {
  return (
    <IconBase>
      <path d="M4 5a2 2 0 012-2h12v18H6a2 2 0 01-2-2V5z" />
      <path d="M4 19h14M9 8h5M9 12h5" />
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
