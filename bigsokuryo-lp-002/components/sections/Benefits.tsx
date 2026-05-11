import AnimatedNumber from "@/components/AnimatedNumber";
import Reveal from "@/components/Reveal";

const I = {
  Coin: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8l3 5 3-5M9 13h6M9 16h6" />
    </svg>
  ),
  TrendUp: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  Award: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11" />
    </svg>
  ),
  Clock: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Cert: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="3" width="16" height="14" rx="2" />
      <path d="M8 8h8M8 12h6" />
      <path d="m9 17 1.5 4 1.5-2 1.5 2 1.5-4" />
    </svg>
  ),
  Home: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
    </svg>
  ),
  Mountain: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 19 6-10 4 6 2-3 6 7H3z" />
    </svg>
  ),
  Cabinet: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M5 11h14M11 7h2M11 15h2" />
    </svg>
  ),
  Bulb: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10c.74.74 1.4 1.5 1.4 2.5v.5h5.2v-.5c0-1 .66-1.76 1.4-2.5A6 6 0 0 0 12 3z" />
    </svg>
  ),
  Shield: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Hand: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 11V5a1.5 1.5 0 1 1 3 0v6" />
      <path d="M12 11V4a1.5 1.5 0 1 1 3 0v7" />
      <path d="M15 11V6a1.5 1.5 0 1 1 3 0v8a6 6 0 0 1-12 0v-3a1.5 1.5 0 1 1 3 0v2" />
    </svg>
  ),
  Heart: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

const highlights = [
  {
    icon: <I.TrendUp />,
    value: 520,
    unit: "万円",
    label: "5 年目 年収実績",
    note: "30 歳・経験者として入社の例",
  },
  {
    icon: <I.Award />,
    value: 10,
    unit: "万",
    unitSub: "/ 月",
    label: "技術士 資格手当",
    note: "資格手当が月給に上乗せ",
  },
  {
    icon: <I.Clock />,
    value: 79.9,
    decimals: 1,
    unit: "%",
    label: "有給取得率",
    note: "完全週休 2 日制",
  },
];

type TableCard = {
  eyebrow: string;
  title: string;
  note: string;
  items: { k: string; v: string }[];
};

const compensation: TableCard = {
  eyebrow: "COMPENSATION",
  title: "給与・賞与",
  note: "新卒・中途共通",
  items: [
    { k: "月給", v: "21 万円以上 (前職・経験を考慮 / 試用期間 3 ヶ月)" },
    { k: "賞与", v: "年 2 回 (7 月 15 日・12 月 15 日) / 計 2 ヶ月分" },
    { k: "昇給", v: "年 1 回 (4 月)" },
    { k: "新卒初任給", v: "大卒 21 万 / 専門 20.7 万 / 高卒 20.5 万" },
    {
      k: "30 歳経験者の年収実績",
      v: "1 年目 390 万 → 2 年目 470 万 → 3 年目 500 万 → 5 年目 520 万円",
    },
  ],
};

const allowances: TableCard = {
  eyebrow: "ALLOWANCES",
  title: "諸手当",
  note: "諸手当 (新卒・中途共通)",
  items: [
    { k: "交通費", v: "全額支給" },
    { k: "残業手当", v: "全額支給" },
    { k: "深夜勤務手当", v: "給与 ÷ 20 日 × 1.25" },
    { k: "休日出勤手当", v: "給与 ÷ 20 日 × 1.25" },
    {
      k: "職務手当",
      v: "主任 1 万円 / 係長 2 万円 / 課長補佐 3 万円 / 課長 10 万円",
    },
    { k: "運転手当", v: "現場への運転時は残業代として支給" },
    { k: "夜食手当", v: "夜勤作業 1 日につき 1,000 円" },
    { k: "住宅手当", v: "持家 月 2 万円 (配偶者あり) / 借家 月 1.5 万円" },
    {
      k: "家族手当",
      v: "配偶者 月 5,000 円 / 子ども 月 10,000 円 (1 名につき)",
    },
    {
      k: "資格手当",
      v: "測量士 1.5 万 / 測量士補 5,000 円 / 1 級土木施工管理 1 万 / 技術士 10 万 / 技術士補 5,000 円 (すべて月額)",
    },
  ],
};

const holidays: TableCard = {
  eyebrow: "HOLIDAYS",
  title: "休日・休暇",
  note: "新卒・中途共通",
  items: [
    { k: "勤務時間", v: "8:00 - 17:00 (実働 8 時間 / 休憩 60 分)" },
    { k: "夜勤時間帯", v: "20:00 - 翌 5:00 (鉄道現場の線路閉鎖等で発生)" },
    { k: "休日", v: "土・日・祝 (完全週休 2 日)" },
    { k: "夏季休暇", v: "8 月 10 日 〜 15 日" },
    { k: "年末年始", v: "12 月 28 日 〜 1 月 5 日" },
    { k: "その他", v: "GW / 慶弔特別休暇" },
    { k: "有給取得率", v: "79.9 %" },
  ],
};

const welfare = [
  {
    icon: <I.Cert />,
    title: "資格支援制度",
    desc: "測量士・測量士補の合格時、試験費用を会社が負担。",
  },
  {
    icon: <I.Home />,
    title: "社員寮完備",
    desc: "単身用 1R を月額 3 万円で利用可能。",
  },
  {
    icon: <I.Mountain />,
    title: "保養所",
    desc: "新潟・湯沢の保養所を社員価格で利用できます。",
  },
  {
    icon: <I.Cabinet />,
    title: "作業着・備品貸与",
    desc: "電卓・事務用品まで、本人負担なしで全て会社貸与。",
  },
  {
    icon: <I.Bulb />,
    title: "社内勉強会",
    desc: "技術向上を目的とした勉強会を年 2 回開催。",
  },
  {
    icon: <I.Shield />,
    title: "保険完備",
    desc: "健康保険・厚生年金保険・雇用保険・労災保険。",
  },
  {
    icon: <I.Hand />,
    title: "無料マッサージ",
    desc: "有資格者によるマッサージを社内で受けられます。",
  },
  {
    icon: <I.Heart />,
    title: "産休・育休制度",
    desc: "女性社員の継続就業を会社として全力でサポート。",
  },
];

function TableCardView({ card }: { card: TableCard }) {
  return (
    <div className=" bg-sand/45 border border-navy/10 p-7 md:p-9">
      <div className="flex items-baseline justify-between flex-wrap gap-3 pb-5 mb-2 border-b border-navy/15">
        <p className="text-xs tracking-[0.4em] text-gold">{card.eyebrow}</p>
        <p className="text-[11px] text-black/55">{card.note}</p>
      </div>
      <dl className="divide-y divide-navy/10">
        {card.items.map((item) => (
          <div
            key={item.k}
            className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 py-4 md:py-5 transition-colors hover:bg-white/40 -mx-3 px-3 "
          >
            <dt className="md:col-span-1 text-sm md:text-[15px] font-bold text-navy self-start">
              {item.k}
            </dt>
            <dd className="md:col-span-3 text-sm md:text-[15px] text-black/85 leading-relaxed">
              {item.v}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-28 bg-gradient-to-b from-white to-sand/40 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-amber-200/15 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-gold">BENEFITS</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-navy leading-tight tracking-tight">
            技術が、
            <span className="bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
              正しく報われる
            </span>
            。
          </h2>
          <p className="mt-5 text-sm md:text-base text-black/70 max-w-xl mx-auto leading-relaxed">
            手当の充実度と、暮らしを支える制度。働き続けられる環境にこだわっています。
          </p>
          <div className="mt-8 mx-auto h-px w-16 bg-gold/60" />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {highlights.map((h, i) => (
            <Reveal
              key={h.label}
              delay={i * 120}
              className="card-hover relative bg-white  border border-navy/10 p-7 overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/10 blur-2xl"
              />
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12  bg-gradient-to-br from-gold to-amber-400 grid place-items-center text-navy flex-none shadow-md">
                  {h.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-3xl md:text-4xl font-bold text-navy tracking-tight leading-none">
                    <AnimatedNumber
                      end={h.value}
                      decimals={h.decimals ?? 0}
                    />
                    <span className="text-base ml-1 text-black/80">
                      {h.unit}
                    </span>
                    {h.unitSub && (
                      <span className="text-xs ml-0.5 text-black/55">
                        {h.unitSub}
                      </span>
                    )}
                  </p>
                  <p className="mt-3 text-sm font-bold text-navy">{h.label}</p>
                  <p className="text-xs text-black/55 mt-0.5">{h.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 space-y-5 md:space-y-6">
          <Reveal>
            <TableCardView card={compensation} />
          </Reveal>
          <Reveal delay={80}>
            <TableCardView card={allowances} />
          </Reveal>
          <Reveal delay={160}>
            <TableCardView card={holidays} />
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal className="text-center">
            <p className="text-xs tracking-[0.4em] text-gold">WELFARE</p>
            <h3 className="mt-3 font-sans font-bold text-2xl md:text-4xl text-navy tracking-tight">
              福利厚生・社内制度
            </h3>
            <p className="mt-4 text-sm text-black/65 max-w-lg mx-auto">
              長く働ける土台を、会社が用意する。
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {welfare.map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 60}
                className="card-hover group  bg-sand/55 border border-navy/10 p-5 md:p-6 flex flex-col gap-4 hover:bg-white"
              >
                <div className="w-10 h-10  bg-white border border-navy/10 grid place-items-center text-gold flex-none transition-all group-hover:bg-gold group-hover:text-white group-hover:border-gold">
                  {w.icon}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-navy text-sm md:text-base leading-tight">
                    {w.title}
                  </p>
                  <p className="mt-2 text-xs md:text-[13px] text-black/65 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={400} className="mt-16 max-w-3xl mx-auto">
          <div className="card-hover flex flex-wrap items-center gap-5 bg-gradient-to-r from-navy via-navy-dark to-navy text-white  p-6 md:p-7 border border-gold/30 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gold/20 blur-3xl"
            />
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-gold via-amber-300 to-amber-500 grid place-items-center text-navy text-2xl font-bold flex-none shadow-lg">
              銀
            </div>
            <div className="relative flex-1 min-w-0">
              <p className="text-[10px] tracking-[0.3em] text-gold">
                CERTIFIED
              </p>
              <p className="font-bold mt-1.5 text-base md:text-lg">
                健康企業宣言「銀の認定」を取得
              </p>
              <p className="text-xs text-white/65 mt-1">
                2025 年 7 月 / 全国健康保険協会 (協会けんぽ)
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
