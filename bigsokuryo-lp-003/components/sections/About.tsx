"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const projects = [
  {
    year: "2020",
    title: "海の森水上競技場",
    sub: "東京オリンピック・パラリンピック",
  },
  {
    year: "2012",
    title: "東京駅丸の内駅舎",
    sub: "創建当時の姿への復原工事",
  },
  {
    year: "—",
    title: "銀座線渋谷駅 移設",
    sub: "ホームを130m表参道側へ",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-20 right-0 w-[420px] h-[420px] rounded-full bg-emerald-50/80 blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-emerald-700 font-bold">
            WHY US
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy leading-[1.25] font-bold tracking-tight">
            「人」を軸に、<br />
            <span className="text-emerald-700">技術</span>を積み上げる。
          </h2>
          <p className="mt-6 text-sm md:text-base text-navy/70 leading-[1.9]">
            東京駅丸の内駅舎の復原、銀座線渋谷駅の移設、海の森水上競技場（2020東京五輪）――
            ビッグ測量設計の名前は、首都圏の主要プロジェクトに刻まれてきました。
          </p>

          <StaggerGroup className="mt-8 space-y-3">
            {projects.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group flex items-center gap-4 rounded-xl border border-emerald-700/15 bg-white px-4 py-3 hover:border-emerald-600/50 hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <span className="font-serif text-xl text-emerald-700 font-bold tabular-nums w-12">
                    {p.year}
                  </span>
                  <span className="h-8 w-px bg-emerald-700/20" />
                  <div>
                    <p className="text-sm font-bold text-navy">{p.title}</p>
                    <p className="text-xs text-navy/55">{p.sub}</p>
                  </div>
                  <span className="ml-auto text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <Reveal delay={0.15} className="space-y-6 text-navy/85 leading-[1.9]">
          <p className="text-base md:text-lg">
            鉄道・空港・トンネル・道路・公共測量。
            <strong className="text-navy">1ミクロン（0.001mm）</strong>の高精度測量を
            支える特許技術や、レーザートラッカー・3Dレーザースキャナといった
            先端機材を備える一方で、私たちが社内で繰り返している言葉は
            <strong className="text-emerald-700">「優しさ・思いやり」</strong>です。
          </p>
          <p>
            採用で見るのは、スキルや学歴ではなく人柄。
            「素直な人」「不器用でも前に進める人」を歓迎し、
            文系・未経験から測量士になった先輩が、いまも現場の中心にいます。
          </p>

          <figure className="relative rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-800 p-8 text-white shadow-xl shadow-emerald-700/20">
            <span
              aria-hidden
              className="absolute top-4 left-6 font-serif text-7xl text-white/20 leading-none"
            >
              &ldquo;
            </span>
            <blockquote className="relative leading-[1.9] text-base">
              お客様と、部下が喜ぶ姿が見られると嬉しい。<br />
              会社の真ん中にあるのは、思いやりです。
            </blockquote>
            <figcaption className="mt-5 text-xs tracking-widest text-emerald-100/80">
              執行役員 高橋 博司｜1991年入社
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
