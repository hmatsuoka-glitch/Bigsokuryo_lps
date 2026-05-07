"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const requirements: { label: string; value: React.ReactNode }[] = [
  {
    label: "雇用形態",
    value: "正社員（試用期間3ヶ月／待遇変更なし）",
  },
  {
    label: "募集職種",
    value: (
      <ul className="space-y-1">
        <li>・測量技術職（公共測量／民間測量／3D計測）</li>
        <li>・CAD・図面作成スタッフ</li>
        <li>・点群処理・BIM/CIMオペレーター</li>
      </ul>
    ),
  },
  {
    label: "応募資格",
    value: (
      <ul className="space-y-1">
        <li>・2026年3月／2027年3月に大学・短大・専門・高専を卒業見込みの方</li>
        <li>・既卒3年以内（第二新卒）の方</li>
        <li>・学部・学科不問／文系・理系不問</li>
        <li>・普通自動車免許（AT限定可／入社後取得でも可）</li>
      </ul>
    ),
  },
  {
    label: "勤務地",
    value: "本社（○○県○○市）／○○支店／○○出張所　※希望と適性で配属",
  },
  {
    label: "勤務時間",
    value: "8:30〜17:30（休憩60分 / 実働8h）　※フレックス導入予定",
  },
  {
    label: "給与",
    value: (
      <div className="space-y-1.5">
        <p>大卒・院卒　月給 230,000円〜</p>
        <p>専門・高専卒　月給 215,000円〜</p>
        <p>短大・高卒　月給 200,000円〜</p>
        <p className="text-xs text-navy/60">
          ※固定残業代は含みません／別途実働分支給
        </p>
      </div>
    ),
  },
  {
    label: "賞与・昇給",
    value: "賞与 年2回（直近3年平均4.2ヶ月） / 昇給 年1回",
  },
  {
    label: "諸手当",
    value:
      "通勤手当（実費）／家賃補助（最大3万円）／資格手当／時間外手当／帰省手当（U・Iターンのみ）",
  },
  {
    label: "休日休暇",
    value:
      "完全週休2日制（土日）／年間休日125日／祝日／有給休暇／夏季・年末年始／慶弔／産育休",
  },
  {
    label: "選考フロー",
    value: (
      <ol className="space-y-1 list-decimal list-inside">
        <li>エントリーフォーム or 公式LINEから応募</li>
        <li>カジュアル面談（オンライン30分）</li>
        <li>会社説明 + 一次面接（現場見学を含む）</li>
        <li>役員面接</li>
        <li>内定（選考開始から3〜4週間目安）</li>
      </ol>
    ),
  },
  {
    label: "提出書類",
    value: "履歴書／成績証明書／卒業見込証明書（既卒の方は卒業証明書）",
  },
];

export default function JobRequirements() {
  return (
    <section id="requirements" className="py-24 bg-sand">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold text-center">
            JOB REQUIREMENTS
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
            募集要項
          </h2>
          <p className="mt-4 text-center text-sm text-navy/70">
            気になる項目だけでもOK。詳細は説明会・公式LINEでもお伝えします。
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 bg-white rounded-2xl border border-navy/10 overflow-hidden divide-y divide-navy/10">
          {requirements.map((r) => (
            <StaggerItem
              key={r.label}
              className="grid md:grid-cols-[200px_1fr] gap-4 px-6 md:px-8 py-5 hover:bg-sand/40 transition-colors"
            >
              <dt className="text-xs md:text-sm tracking-widest text-gold font-bold pt-0.5">
                {r.label}
              </dt>
              <dd className="text-sm md:text-base text-navy/85 leading-relaxed">
                {r.value}
              </dd>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
