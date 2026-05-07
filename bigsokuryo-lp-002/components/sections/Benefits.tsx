import AnimatedNumber from "@/components/AnimatedNumber";
import Reveal from "@/components/Reveal";

const IconCoin = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M9 8l3 5 3-5M9 13h6M9 16h6" />
  </svg>
);
const IconStack = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <path d="M17.5 14v7M14 17.5h7" />
  </svg>
);
const IconCalendar = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" />
  </svg>
);
const IconHeart = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const IconTrendUp = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);
const IconAward = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11" />
  </svg>
);
const IconClock = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

type Highlight = {
  icon: React.ReactElement;
  value: number;
  decimals?: number;
  unit: string;
  unitSub?: string;
  label: string;
  note: string;
};

const highlights: Highlight[] = [
  {
    icon: <IconTrendUp />,
    value: 520,
    unit: "万円",
    label: "5 年目 年収実績",
    note: "30 歳・経験者として入社の例",
  },
  {
    icon: <IconAward />,
    value: 10,
    unit: "万",
    unitSub: "/ 月",
    label: "技術士 資格手当",
    note: "資格手当が月給に上乗せ",
  },
  {
    icon: <IconClock />,
    value: 79.9,
    decimals: 1,
    unit: "%",
    label: "有給取得率",
    note: "完全週休 2 日制",
  },
];

type Item = { k: string; v: string; note?: string; spotlight?: boolean };
type Group = {
  id: string;
  label: string;
  desc: string;
  icon: React.ReactElement;
  items: Item[];
};

const groups: Group[] = [
  {
    id: "salary",
    label: "給与・賞与",
    desc: "前職・経験を考慮した個別オファー",
    icon: <IconCoin />,
    items: [
      { k: "月給", v: "21 万円以上", note: "試用期間 3 ヶ月" },
      { k: "賞与", v: "年 2 回 / 計 2 ヶ月分", note: "7 月 15 日・12 月 15 日" },
      { k: "昇給", v: "年 1 回 (4 月)" },
      {
        k: "30 歳経験者の年収実績",
        v: "1 年目 390 万 → 5 年目 520 万円",
        spotlight: true,
      },
    ],
  },
  {
    id: "allowance",
    label: "諸手当",
    desc: "頑張りが、毎月の手取りに乗る",
    icon: <IconStack />,
    items: [
      { k: "交通費 / 残業手当", v: "全額支給" },
      { k: "深夜勤務 / 休日出勤", v: "給与 ÷ 20 日 × 1.25" },
      { k: "夜食手当", v: "夜勤 1 日につき 1,000 円" },
      { k: "住宅手当", v: "持家 月 2 万 / 借家 月 1.5 万" },
      { k: "家族手当", v: "配偶者 月 5,000 円 / 子 1 人 月 1 万" },
      {
        k: "資格手当",
        v: "技術士 月 10 万 / 1 級土木 月 1 万 / 測量士 月 1.5 万 ほか",
        spotlight: true,
      },
      { k: "職務手当", v: "主任 1 万 〜 課長 10 万" },
    ],
  },
  {
    id: "leave",
    label: "休日・休暇",
    desc: "休めるから、現場で集中できる",
    icon: <IconCalendar />,
    items: [
      { k: "勤務時間", v: "8:00 - 17:00 (実働 8h / 休憩 60 分)" },
      { k: "休日", v: "土・日・祝 (完全週休 2 日)" },
      { k: "夏季休暇", v: "8 月 10 日 〜 15 日" },
      { k: "年末年始", v: "12 月 28 日 〜 1 月 5 日" },
      { k: "その他", v: "GW / 慶弔特別休暇" },
      { k: "有給取得率", v: "79.9 %", spotlight: true },
    ],
  },
  {
    id: "welfare",
    label: "福利厚生・社内制度",
    desc: "長く働ける土台を、会社が用意する",
    icon: <IconHeart />,
    items: [
      { k: "保険", v: "健康・厚生年金・雇用・労災" },
      { k: "資格支援", v: "測量士 / 補 試験費用 全額負担", spotlight: true },
      { k: "社員寮", v: "単身 1R 月 3 万円" },
      { k: "保養所", v: "新潟県湯沢" },
      { k: "備品貸与", v: "作業着・電卓・事務用品 全て会社支給" },
      { k: "社内勉強会", v: "年 2 回 (技術向上目的)" },
      { k: "健康サポート", v: "有資格者による無料マッサージ" },
      { k: "女性支援", v: "産休・育休制度" },
    ],
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-28 bg-gradient-to-b from-sand to-sand/50 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-amber-200/20 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-gold">BENEFITS</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            技術が、
            <span className="bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
              正しく報われる
            </span>
            。
          </h2>
          <p className="mt-5 text-sm md:text-base text-navy/70 max-w-xl mx-auto leading-relaxed">
            数字で見る、ビッグ測量設計の評価制度と働く環境。
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4 md:gap-5">
          {highlights.map((h, i) => (
            <Reveal
              key={h.label}
              delay={i * 120}
              className="card-hover relative bg-white rounded-2xl border border-navy/10 p-7 overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/10 blur-2xl"
              />
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-amber-400 grid place-items-center text-navy flex-none shadow-md">
                  {h.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-3xl md:text-4xl font-bold text-navy tracking-tight leading-none">
                    <AnimatedNumber
                      end={h.value}
                      decimals={h.decimals ?? 0}
                    />
                    <span className="text-base ml-1 text-navy/80">
                      {h.unit}
                    </span>
                    {h.unitSub && (
                      <span className="text-xs ml-0.5 text-navy/55">
                        {h.unitSub}
                      </span>
                    )}
                  </p>
                  <p className="mt-3 text-sm font-bold text-navy">
                    {h.label}
                  </p>
                  <p className="text-xs text-navy/55 mt-0.5">{h.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5 md:gap-6">
          {groups.map((g, i) => (
            <Reveal
              key={g.id}
              delay={i * 100}
              className="card-hover bg-white rounded-2xl border border-navy/10 overflow-hidden flex flex-col"
            >
              <div className="px-7 pt-7 pb-5 border-b border-navy/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-navy-dark grid place-items-center text-gold flex-none shadow-md">
                  {g.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-bold text-lg md:text-xl text-navy leading-tight">
                    {g.label}
                  </h3>
                  <p className="text-xs text-navy/60 mt-1">{g.desc}</p>
                </div>
                <span className="text-[10px] font-mono text-navy/30 tracking-widest hidden sm:inline">
                  0{i + 1}
                </span>
              </div>
              <dl className="divide-y divide-navy/5 flex-1">
                {g.items.map((item) => (
                  <div
                    key={item.k}
                    className={`grid sm:grid-cols-5 gap-1 sm:gap-4 px-7 py-3.5 transition-colors hover:bg-sand/40 ${
                      item.spotlight
                        ? "bg-gradient-to-r from-amber-50/80 to-transparent border-l-2 border-gold"
                        : ""
                    }`}
                  >
                    <dt className="sm:col-span-2 text-[11px] sm:text-xs text-navy/55 tracking-wide self-center">
                      {item.k}
                    </dt>
                    <dd className="sm:col-span-3">
                      <p
                        className={`text-sm leading-snug ${
                          item.spotlight
                            ? "font-bold text-navy"
                            : "text-navy/90"
                        }`}
                      >
                        {item.v}
                      </p>
                      {item.note && (
                        <p className="text-[11px] text-navy/50 mt-0.5">
                          {item.note}
                        </p>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="mt-14 max-w-3xl mx-auto">
          <div className="card-hover flex flex-wrap items-center gap-5 bg-gradient-to-r from-navy via-navy-dark to-navy text-white rounded-2xl p-6 md:p-7 border border-gold/30 relative overflow-hidden">
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
