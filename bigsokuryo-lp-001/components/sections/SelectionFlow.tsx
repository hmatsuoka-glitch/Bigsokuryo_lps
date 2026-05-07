"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const flows = [
  {
    title: "新卒採用",
    note: "人柄重視。筆記試験・適性検査はありません。",
    steps: [
      {
        n: "01",
        label: "1次選考　コミュニケーション考査",
        body: "人事担当との対話。測量機械の実技体験ありますが、操作スキルではなく姿勢・協調性を見ます。",
      },
      {
        n: "02",
        label: "2次選考　工事測量講話",
        body: "現場管理者からの講話で、会社理解を深めていただきます。",
      },
      {
        n: "03",
        label: "3次選考　個別面接",
        body: "現場管理者と1対1で面接。現場のリアルもお伝えします。",
      },
      {
        n: "04",
        label: "最終選考　社長面接",
        body: "代表との個別面接。お互いの未来観を確かめる場です。",
      },
      {
        n: "★",
        label: "内定",
        body: "内定通知を郵送いたします。",
      },
    ],
    color: "from-sky-50 to-white",
  },
  {
    title: "中途採用",
    note: "入社時期はご相談に応じます。",
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
      },
    ],
    color: "from-amber-50 to-white",
  },
];

export default function SelectionFlow() {
  return (
    <section id="flow" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold text-center">
            SELECTION FLOW
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
            採用フロー
          </h2>
          <p className="mt-4 text-center text-sm text-navy/65 max-w-xl mx-auto">
            エントリーから内定まで、ありのままのあなたで臨んでいただける選考です。
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {flows.map((f) => (
            <Reveal key={f.title}>
              <div
                className={`rounded-2xl border border-navy/10 p-7 bg-gradient-to-b ${f.color} h-full`}
              >
                <h3 className="font-serif text-2xl text-navy">{f.title}</h3>
                <p className="mt-1 text-xs text-navy/55">{f.note}</p>

                <StaggerGroup className="mt-6 relative">
                  <span
                    aria-hidden
                    className="absolute left-[15px] top-2 bottom-2 w-px bg-navy/15"
                  />
                  <ol className="space-y-5 relative">
                    {f.steps.map((s) => (
                      <StaggerItem key={s.n}>
                        <li className="relative pl-12">
                          <span className="absolute left-0 top-0 w-8 h-8 rounded-full bg-navy text-white text-[11px] grid place-items-center font-bold">
                            {s.n}
                          </span>
                          <p className="font-bold text-navy text-sm">
                            {s.label}
                          </p>
                          <p className="mt-1 text-xs text-navy/70 leading-relaxed">
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
          <div className="rounded-2xl bg-sand border border-navy/10 px-6 py-5 text-center text-sm text-navy/75">
            選考に関するお問い合わせは、
            <a
              href="mailto:saiyou@bigsdc.co.jp"
              className="text-gold font-bold hover:underline"
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
