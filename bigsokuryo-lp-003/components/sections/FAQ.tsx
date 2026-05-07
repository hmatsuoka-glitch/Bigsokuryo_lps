"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const faqs = [
  {
    q: "文系・未経験でも応募できますか？",
    a: "歓迎しています。「文系でも大丈夫！」を地で行く社員が活躍しており、入社後の器械研修・OJT・社内勉強会（年2回）でゼロから学べます。測量士・測量士補の試験費用は合格時に会社が負担します。",
  },
  {
    q: "選考で重視するポイントは何ですか？",
    a: "人柄を重視します。新卒選考では筆記試験や適性検査は行いません。コミュニケーション考査、現場管理者との講話・面接、社長との最終面接を通して「思いやり」「素直さ」「コミュニケーション」を見ています。",
  },
  {
    q: "選考の流れを教えてください。",
    a: "新卒は1次（人事との対話・測量機械の体験）→ 2次（現場管理者の講話）→ 3次（個別面接）→ 最終（社長面接）→ 内定。中途は1次（現場責任者）→ 最終（部署責任者）→ 内定。中途の入社時期は相談に応じます。",
  },
  {
    q: "勤務時間や残業はどれくらいですか？",
    a: "基本は8:00〜17:00（実働8時間／休憩60分）。鉄道工事では夜勤シフト（20:00〜翌5:00）もあり、残業手当・深夜勤務手当・夜食手当（1,000円／夜勤1日）はすべて全額支給します。",
  },
  {
    q: "地方から上京しても住む場所はありますか？",
    a: "単身用社員寮（1R／月3万円）を用意しています。住宅手当（持ち家2万円／借家1.5万円）、家族手当、保養所（新潟・湯沢）も完備。家族帯同の移住でも長く続けられる環境です。",
  },
  {
    q: "産休・育休は取れますか？",
    a: "制度として整備しています。女性社員の活躍支援、健康企業宣言「銀の認定」取得（2025年7月）など、ライフステージが変わっても働き続けられる仕組みづくりを進めています。",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-28 bg-gradient-to-b from-emerald-50 to-white overflow-hidden"
    >
      <div className="relative max-w-3xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-emerald-700 font-bold">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy font-bold tracking-tight">
            よくある<span className="text-emerald-700">質問</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 space-y-3">
          {faqs.map((item) => (
            <StaggerItem key={item.q}>
              <details className="group bg-white border border-emerald-700/15 px-6 py-5 hover:border-emerald-600/50 hover:shadow-lg transition-all duration-300 open:shadow-xl open:border-emerald-600/60">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 text-navy font-bold text-base">
                  <span className="flex items-start gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-700/10 text-emerald-700 grid place-items-center text-sm font-bold">
                      Q
                    </span>
                    <span className="leading-snug">{item.q}</span>
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-700/10 text-emerald-700 grid place-items-center text-lg font-bold group-open:rotate-45 group-open:bg-emerald-700 group-open:text-white transition-all">
                    +
                  </span>
                </summary>
                <div className="mt-4 pl-10 flex gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-700 text-white grid place-items-center text-xs font-bold">
                    A
                  </span>
                  <p className="text-sm md:text-base text-navy/75 leading-[1.95]">
                    {item.a}
                  </p>
                </div>
              </details>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
