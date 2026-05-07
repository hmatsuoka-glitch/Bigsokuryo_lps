"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const principles = [
  {
    title: "約束を守る",
    body: "期限と自分の発言に責任を持つ。これは社会のルールを守ることと同じです。",
  },
  {
    title: "嘘をつかない",
    body: "失敗を素早く処理するために、隠さない・はぐらかさない。誠実さが現場を救います。",
  },
  {
    title: "思いやりを持つ",
    body: "相手の考えと望みを常に想像する。思いやりは、社会への貢献そのもの。",
  },
];

export default function CEOMessage() {
  return (
    <section id="message" className="py-24 bg-navy text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 0%, rgba(199,155,61,0.4), transparent 45%), radial-gradient(circle at 10% 90%, rgba(255,255,255,0.08), transparent 50%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold text-center">
            MESSAGE FROM CEO
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-center">
            代表メッセージ
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <blockquote className="font-serif text-xl md:text-2xl leading-[1.9] text-white/95 text-balance">
            「マニュアル通りではなく、
            <br className="hidden md:block" />
            自分の頭で考えて行動する。」
          </blockquote>
          <p className="mt-8 text-white/80 leading-relaxed max-w-2xl">
            5年・10年先の未来に結果を出せるかどうかは、いまの一歩で決まります。
            失敗を恐れず、どんどんトライしてほしい。
            思いやりは、社会への貢献です。
            まず、自分の足で一歩を踏み出すことから始めよう。
            若さには可能性がある。未来に向けて羽ばたけ！
          </p>
          <p className="mt-6 text-sm text-white/60">
            代表取締役　村田 豊世
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <p className="text-xs tracking-[0.3em] text-gold">
            3 PRINCIPLES
          </p>
          <h3 className="mt-2 font-serif text-2xl">
            大切にしている3つの考え方
          </h3>
        </Reveal>

        <StaggerGroup className="mt-8 grid md:grid-cols-3 gap-5">
          {principles.map((p, i) => (
            <StaggerItem
              key={p.title}
              className="rounded-2xl border border-white/15 p-7 bg-white/5 backdrop-blur"
            >
              <p className="text-xs tracking-[0.3em] text-gold">
                0{i + 1}
              </p>
              <h4 className="mt-2 font-serif text-xl">{p.title}</h4>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                {p.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2} className="mt-12">
          <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 px-6 py-5 text-sm text-white/85 leading-relaxed">
            <p className="text-xs tracking-[0.3em] text-gold mb-2">
              求める人材
            </p>
            5年・10年先の未来に結果を出せる人／自分の頭で考えて行動できる人／努力ができる人。
            人柄重視の選考のため、筆記試験・適性検査はありません。
          </div>
        </Reveal>
      </div>
    </section>
  );
}
