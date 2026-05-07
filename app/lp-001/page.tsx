import type { Metadata } from "next";
import SiteHeader from "@/components/recruit/SiteHeader";
import SiteFooter from "@/components/recruit/SiteFooter";
import EntryForm from "@/components/recruit/EntryForm";

export const metadata: Metadata = {
  title: "新卒採用 | 地図に、自分の名前を残す。",
  description:
    "ビッグ測量株式会社の新卒・第二新卒採用ページ。未経験からスタートできる育成制度と、若手が活躍する現場をご紹介します。",
};

const growthSteps = [
  { year: "1年目", label: "現場研修", body: "先輩とペアで現場へ。基本機材の扱いと観測の流れを身につけます。" },
  { year: "2年目", label: "測量士補取得", body: "資格取得を会社が全面サポート。試験対策講座と受験費用も支給。" },
  { year: "3年目", label: "サブ担当", body: "小規模案件のサブ担当として、計画立案から関わります。" },
  { year: "5年目", label: "主任クラス", body: "後輩指導と現場リード。3D計測など得意分野を伸ばす研修も。" },
];

const voices = [
  {
    name: "M.K.（入社3年目／新卒）",
    college: "工業高等専門学校 卒",
    quote:
      "学校では設計を学んでいたので測量は未経験でしたが、先輩がマンツーマンで教えてくれ、現場で測ったデータが図面になる瞬間にハマりました。",
  },
  {
    name: "S.H.（入社2年目／第二新卒）",
    college: "文系大学 卒・営業職から転職",
    quote:
      "屋外で体を動かす仕事がしたくて転職。最初は専門用語にとまどいましたが、研修と国家資格取得の支援が手厚く、半年で測量士補に合格できました。",
  },
  {
    name: "T.N.（入社4年目／新卒）",
    college: "農学部 卒",
    quote:
      "ドローンや3Dスキャナを動かす仕事は、想像以上にクリエイティブ。自分の操作したデータが市の都市計画に使われたときは震えました。",
  },
];

export default function NewGradLP() {
  return (
    <>
      <SiteHeader lpCode="LP-001 / 新卒採用" tone="navy" />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-sand">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(12,43,74,0.15), transparent 40%), radial-gradient(circle at 80% 60%, rgba(199,155,61,0.18), transparent 40%)",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36">
            <p className="text-xs md:text-sm tracking-[0.4em] text-gold mb-6">
              NEW GRADUATE 2026 / 2027
            </p>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.3] text-navy text-balance">
              地図に、<br />
              <span className="text-gold">自分の名前</span>を残す。
            </h1>
            <p className="mt-8 max-w-xl text-navy/80 leading-relaxed">
              あなたが歩いた道、あなたが測った土地が、
              この街の図面に刻まれていく。<br />
              ビッグ測量は、未経験からはじめる若手を本気で育てる会社です。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#entry"
                className="px-7 py-3 rounded-full bg-navy text-white text-sm tracking-widest hover:bg-gold transition"
              >
                エントリーする
              </a>
              <a
                href="#voice"
                className="px-7 py-3 rounded-full border border-navy/30 text-navy text-sm tracking-widest hover:bg-navy hover:text-white transition"
              >
                先輩社員の声を聞く
              </a>
            </div>

            <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {[
                ["94%", "新卒3年定着率"],
                ["28名", "若手有資格者"],
                ["100%", "資格取得支援"],
                ["年2回", "面談・1on1"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="bg-white/70 backdrop-blur rounded-2xl p-5 border border-navy/10"
                >
                  <dt className="text-xs text-navy/60">{label}</dt>
                  <dd className="mt-1 text-2xl font-bold text-navy">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs tracking-[0.4em] text-gold">ABOUT US</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy">
                測量は、<br />
                未来を準備する仕事。
              </h2>
            </div>
            <div className="space-y-4 text-navy/80 leading-relaxed">
              <p>
                道路や橋、河川の堤防、街の再開発――
                ふだん何気なく使っているインフラは、
                すべて「測ること」から始まります。
              </p>
              <p>
                ビッグ測量は1978年の創業以来、
                公共測量・境界測量から最新のドローン3D計測まで、
                地域の図面を描き続けてきました。
              </p>
              <p>
                測量は専門知識が必要ですが、最初から専門家でなくて構いません。
                技術と覚悟は、現場で一緒に育てていきます。
              </p>
            </div>
          </div>
        </section>

        {/* GROWTH STEPS */}
        <section id="work" className="py-24 bg-sand">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs tracking-[0.4em] text-gold text-center">
              GROWTH STEPS
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
              5年でここまで成長できる
            </h2>
            <div className="mt-14 grid md:grid-cols-4 gap-5">
              {growthSteps.map((s, i) => (
                <div
                  key={s.year}
                  className="bg-white rounded-2xl p-6 border-t-4 border-gold relative"
                >
                  <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-navy text-white text-xs grid place-items-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs tracking-widest text-gold">{s.year}</p>
                  <h3 className="mt-1 font-serif text-xl text-navy">
                    {s.label}
                  </h3>
                  <p className="mt-3 text-sm text-navy/70 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VOICES */}
        <section id="voice" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs tracking-[0.4em] text-gold text-center">
              EMPLOYEE VOICE
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
              先輩たちのリアル
            </h2>
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {voices.map((v) => (
                <figure
                  key={v.name}
                  className="rounded-2xl bg-sand p-7 border border-navy/10"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-navy mb-5 grid place-items-center text-white font-serif">
                    {v.name.charAt(0)}
                  </div>
                  <blockquote className="text-sm text-navy/80 leading-relaxed">
                    「{v.quote}」
                  </blockquote>
                  <figcaption className="mt-5 text-xs text-navy/60">
                    <p className="font-bold text-navy text-sm">{v.name}</p>
                    {v.college}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="py-24 bg-navy text-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs tracking-[0.4em] text-gold text-center">
              BENEFITS
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-center">
              新卒だからこそ、<br className="md:hidden" />
              安心できる制度を。
            </h2>
            <ul className="mt-14 grid md:grid-cols-2 gap-x-8 gap-y-5 text-sm">
              {[
                "測量士補・測量士の受験対策講座を社内で開催",
                "資格取得時に最大15万円の祝金",
                "入社後1ヶ月の集合研修＋3ヶ月のOJT",
                "メンター制度（年齢の近い先輩がマンツーマン）",
                "ドローン国家ライセンスの取得費用全額会社負担",
                "完全週休2日制／年間休日125日",
                "残業月平均15h以内（繁忙期除く）",
                "家賃補助・帰省手当・引越補助あり",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 border-b border-white/10 pb-4"
                >
                  <span className="text-gold mt-0.5">◆</span>
                  <span className="text-white/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-sand">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs tracking-[0.4em] text-gold text-center">FAQ</p>
            <h2 className="mt-3 font-serif text-3xl text-navy text-center">
              よくある質問
            </h2>
            <div className="mt-12 space-y-4">
              {[
                {
                  q: "理系・建築系以外でも応募できますか？",
                  a: "もちろんです。実際に文系出身の若手が約半数を占めています。研修制度を整えているので、未経験から問題なくスタートできます。",
                },
                {
                  q: "配属先はどう決まりますか？",
                  a: "入社後の研修と本人の希望、適性を踏まえて決定します。U・Iターン希望の方は出身地優先での配属も可能です。",
                },
                {
                  q: "現場と内勤、どちらが多いですか？",
                  a: "1〜2年目は外業6:内業4ほど、その後は専門領域に応じて変わります。点群処理やCAD作業を中心とする社員もいます。",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group bg-white rounded-xl border border-navy/10 px-6 py-5"
                >
                  <summary className="cursor-pointer list-none flex justify-between items-center text-navy font-bold">
                    {item.q}
                    <span className="text-gold group-open:rotate-45 transition">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-navy/70 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <EntryForm category="新卒・第二新卒" />
      </main>

      <SiteFooter />
    </>
  );
}
