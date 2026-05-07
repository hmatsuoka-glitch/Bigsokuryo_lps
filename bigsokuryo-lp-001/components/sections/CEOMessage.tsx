"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const principles = [
  {
    title: "約束を守る",
    body: "期限と発言に責任を持つ。社会のルールを守ることと同じ。",
  },
  {
    title: "嘘をつかない",
    body: "失敗を素早く処理するため、隠さない・はぐらかさない。",
  },
  {
    title: "思いやりを持つ",
    body: "相手の考えと望みを想像する。それが社会への貢献。",
  },
];

export default function CEOMessage() {
  return (
    <section
      id="message"
      className="py-24 md:py-32 bg-navy text-white relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 0%, rgba(199,155,61,0.5), transparent 45%), radial-gradient(circle at 10% 90%, rgba(255,255,255,0.08), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-light text-center font-bold">
            MESSAGE FROM CEO
          </p>
          <h2 className="mt-3 font-sans font-black text-4xl md:text-5xl text-center heading-display">
            代表メッセージ
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] gap-10 md:gap-12 items-start">
          {/* Portrait */}
          <Reveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto md:mx-0 w-56 md:w-full max-w-[300px]"
            >
              <span
                aria-hidden
                className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/40 to-transparent blur-xl"
              />
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold/30 shadow-soft-lg aspect-[19/20] bg-navy-dark">
                <Image
                  src="/message_img.jpg"
                  alt="代表取締役 村田 豊世"
                  fill
                  sizes="(max-width: 768px) 224px, 300px"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent"
                />
              </div>
              <div className="mt-4 text-center md:text-left">
                <p className="font-sans font-bold text-base text-white">
                  村田 豊世
                </p>
                <p className="text-[11px] tracking-[0.3em] text-gold-light">
                  REPRESENTATIVE DIRECTOR
                </p>
              </div>
            </motion.div>
          </Reveal>

          {/* Quote + body */}
          <Reveal delay={0.1}>
            <div className="relative">
              <span
                aria-hidden
                className="absolute -left-2 -top-12 md:-left-8 md:-top-16 font-serif text-[160px] md:text-[220px] leading-none text-gold/20 select-none"
              >
                “
              </span>
              <blockquote className="relative font-sans font-bold text-2xl md:text-4xl leading-[1.7] text-white text-balance heading-display">
                マニュアル通りではなく、
                <br className="hidden md:block" />
                自分の頭で考えて
                <span className="text-gold-light">行動する。</span>
              </blockquote>
            </div>

            <p className="mt-8 text-white/85 leading-loose max-w-2xl text-sm md:text-base">
              5年・10年先に結果を出せるかは、いまの一歩で決まる。
              失敗を恐れず、トライしてほしい。
              思いやりは、社会への貢献。若さには可能性がある。
              未来に向けて羽ばたけ！
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="w-10 h-px bg-gold" />
              <p className="text-sm text-white/70 tracking-widest">
                代表取締役　村田 豊世
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-20">
          <p className="text-xs tracking-[0.4em] text-gold-light font-bold">
            3 PRINCIPLES
          </p>
          <h3 className="mt-2 font-sans font-bold text-2xl md:text-3xl heading-display">
            大切にしている3つの考え方
          </h3>
        </Reveal>

        <StaggerGroup className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {principles.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className="group relative rounded-2xl border border-white/15 p-5 md:p-7 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-gold/40 transition-all duration-500 hover-lift h-full">
                <div className="flex items-baseline justify-between">
                  <span className="font-sans font-black text-4xl md:text-5xl text-gold/30 group-hover:text-gold transition-colors leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-white/40">
                    PRINCIPLE
                  </span>
                </div>
                <h4 className="mt-4 md:mt-5 font-sans font-bold text-base md:text-xl heading-display">
                  {p.title}
                </h4>
                <p className="mt-2 md:mt-3 text-xs md:text-sm text-white/80 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2} className="mt-12">
          <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/20 px-7 py-6 text-sm md:text-base text-white/90 leading-loose">
            <p className="text-xs tracking-[0.4em] text-gold-light font-bold mb-3">
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
