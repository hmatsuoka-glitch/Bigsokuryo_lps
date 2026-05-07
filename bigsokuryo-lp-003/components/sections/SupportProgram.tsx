"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const programs = [
  {
    step: "01",
    title: "入社・基礎研修",
    body: "器械研修や社内勉強会（年2回）で測量の基礎から学べます。作業着・電卓・事務用品はすべて会社から貸与。地方出身の方には単身用社員寮（1R・月3万円）を用意しています。",
  },
  {
    step: "02",
    title: "現場OJT",
    body: "先輩との同行から始まり、少しずつ任される範囲を広げていきます。「不器用でも前に進む人を育てたい」という採用方針通り、急かさずじっくり育成。文系・未経験から測量士になった先輩が、現場の中心にいます。",
  },
  {
    step: "03",
    title: "資格取得サポート",
    body: "測量士・測量士補の試験費用は合格時に会社負担。資格手当も月額で支給（測量士1.5万円／技術士10万円 など）。学びを評価し、長く積み上げる仕組みです。",
  },
  {
    step: "04",
    title: "暮らしと家族の支援",
    body: "住宅手当（持ち家2万円／借家1.5万円）、家族手当（配偶者5千円・子1万円）、保養所（新潟・湯沢）、産休・育休制度。ライフステージが変わっても続けられる環境です。",
  },
];

export default function SupportProgram() {
  return (
    <section id="work" className="relative py-24 md:py-28 bg-white overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-emerald-700 font-bold">
            GROWTH JOURNEY
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy font-bold tracking-tight">
            一人にしない、<span className="text-emerald-700">4ステップ</span>。
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 md:mt-16 grid grid-cols-2 gap-3 md:gap-6">
          {programs.map((p) => (
            <StaggerItem key={p.step}>
              <div className="group relative h-full border border-emerald-700/15 bg-white p-5 md:p-7 hover:border-emerald-600/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-600 to-teal-700 grid place-items-center text-white font-serif font-bold text-base md:text-xl shadow-lg shadow-emerald-700/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {p.step}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] text-emerald-700 font-bold">
                      STEP
                    </p>
                    <h3 className="mt-0.5 font-serif text-base md:text-2xl text-navy font-bold leading-snug">
                      {p.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 md:mt-4 text-[12px] md:text-sm text-navy/75 leading-[1.85]">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
