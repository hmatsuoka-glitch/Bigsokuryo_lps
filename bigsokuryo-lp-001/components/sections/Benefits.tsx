"use client";

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

const welfare = [
  {
    title: "資格支援制度",
    body: "測量士・測量士補の合格時、試験費用を会社が負担。",
  },
  {
    title: "社員寮完備",
    body: "単身用1Rを月額3万円で利用可能。",
  },
  {
    title: "保養所",
    body: "新潟・湯沢の保養所を社員価格で利用できます。",
  },
  {
    title: "作業着・備品貸与",
    body: "電卓・事務用品まで、本人負担なしで全て会社貸与。",
  },
  {
    title: "社内勉強会",
    body: "技術向上を目的とした勉強会を年2回開催。",
  },
  {
    title: "有給取得率 79.9%",
    body: "繁忙期を含めて取得しやすい体制を継続中。",
  },
  {
    title: "無料マッサージ",
    body: "有資格者によるマッサージを社内で受けられます。",
  },
  {
    title: "産休・育休制度",
    body: "女性社員の継続就業を会社として全力でサポート。",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold text-center">
            BENEFITS
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
            福利厚生・諸手当
          </h2>
          <p className="mt-4 text-center text-sm text-navy/65 max-w-xl mx-auto">
            手当の充実度と、暮らしを支える制度。働き続けられる環境にこだわっています。
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="bg-sand rounded-2xl border border-navy/10 overflow-hidden">
            <p className="px-6 md:px-8 pt-6 text-xs tracking-[0.3em] text-gold">
              ALLOWANCES — 諸手当（新卒・中途共通）
            </p>
            <dl className="divide-y divide-navy/10 px-6 md:px-8 pb-3">
              {allowances.map(([k, v]) => (
                <div
                  key={k}
                  className="grid md:grid-cols-[200px_1fr] gap-3 py-4 text-sm"
                >
                  <dt className="text-navy/60 tracking-widest text-xs md:text-sm">
                    {k}
                  </dt>
                  <dd className="text-navy/90 leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <p className="text-xs tracking-[0.3em] text-gold">
            WELFARE — 福利厚生・社内制度
          </p>
        </Reveal>

        <StaggerGroup className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {welfare.map((w) => (
            <StaggerItem
              key={w.title}
              className="bg-sand rounded-2xl p-6 border border-navy/10 hover:-translate-y-1 transition-transform"
            >
              <p className="font-serif text-base text-navy">{w.title}</p>
              <p className="mt-2 text-xs text-navy/70 leading-relaxed">
                {w.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
