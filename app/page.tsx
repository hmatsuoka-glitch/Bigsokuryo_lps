import Link from "next/link";

const lps = [
  {
    href: "/lp-001",
    code: "LP-001",
    target: "新卒・第二新卒",
    title: "地図に、自分の名前を残す。",
    desc: "成長環境と育成制度をフィーチャーした若手向けランディングページ。",
    accent: "from-sky-500 to-navy",
  },
  {
    href: "/lp-002",
    code: "LP-002",
    target: "中途・経験者",
    title: "あなたの技術が、地域の標準になる。",
    desc: "技術スタック・待遇・キャリアモデルを訴求する経験者向けLP。",
    accent: "from-amber-500 to-rose-700",
  },
  {
    href: "/lp-003",
    code: "LP-003",
    target: "U・Iターン希望者",
    title: "測量と暮らしが、ちょうどいい。",
    desc: "ライフスタイルと地域への移住支援を中心にした暮らし重視型LP。",
    accent: "from-emerald-500 to-teal-800",
  },
];

export default function IndexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sand">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-12">
        <p className="text-xs tracking-[0.4em] text-gold mb-6">
          BIG SOKURYO RECRUIT LP CATALOG
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-navy leading-[1.4] mb-6 text-balance">
          ビッグ測量株式会社の<br />
          採用ランディングページ集
        </h1>
        <p className="text-navy/70 max-w-2xl">
          ターゲット別に最適化した3パターンのLPを掲載しています。
          訴求軸とビジュアルトーンを変えて、それぞれのオーディエンスに刺さる構成にしました。
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-32 grid gap-6 md:grid-cols-3">
        {lps.map((lp) => (
          <Link
            key={lp.href}
            href={lp.href}
            className="group relative overflow-hidden rounded-2xl bg-white border border-navy/10 p-8 shadow-sm hover:shadow-xl transition"
          >
            <div
              className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${lp.accent} opacity-20 group-hover:opacity-40 transition`}
            />
            <p className="text-xs tracking-widest text-gold">{lp.code}</p>
            <p className="mt-2 text-sm text-navy/60">対象：{lp.target}</p>
            <h2 className="mt-4 font-serif text-2xl text-navy leading-snug">
              {lp.title}
            </h2>
            <p className="mt-4 text-sm text-navy/70">{lp.desc}</p>
            <p className="mt-8 text-sm font-bold text-navy group-hover:text-gold transition">
              プレビューを見る →
            </p>
          </Link>
        ))}
      </section>

      <footer className="border-t border-navy/10 py-8 text-center text-xs text-navy/50">
        © BIG SOKURYO Co., Ltd.
      </footer>
    </main>
  );
}
