"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Motion";

const voices = [
  {
    name: "高橋 博司",
    year: "1991年入社",
    role: "執行役員",
    catch: "優しさと思いやり",
    photo: "/voice_takahashi.jpg",
    quote:
      "お客様と部下が喜ぶ姿が、何より嬉しい。採用で見るのは「思いやり」と「コミュニケーション」です。",
  },
  {
    name: "紙元 真介",
    year: "2010年入社",
    role: "応用技術測量部",
    catch: "必要なのはガッツ！",
    photo: "/voice_kamimoto.jpg",
    quote:
      "現場の難所は、気合でひっくり返ることもある。続けたい・挑みたい気持ちのある人と働きたい。",
  },
  {
    name: "成田 慎",
    year: "2008年入社",
    role: "ソリューションプロバイダ部",
    catch: "文系でも大丈夫！",
    photo: "/voice_narita.jpg",
    quote:
      "私は文系出身。社内勉強会と先輩のサポートで一歩ずつ習得できました。学部は問いません。",
  },
  {
    name: "長砂 琢也",
    year: "2012年入社",
    role: "空間情報事業部",
    catch: "とことん付き合う",
    photo: "/voice_nagasuna.jpg",
    quote:
      "難しい現場ほど、技術と粘りで応える。お客様と長く付き合える仕事です。",
  },
  {
    name: "阿久津 尚大",
    year: "2013年入社",
    role: "空間情報事業部",
    catch: "軽いくらいが・・",
    photo: "/voice_akutsu.jpg",
    quote:
      "重い仕事ほど、コミュニケーションは軽やかに。チームで動く現場では、これが意外と効きます。",
  },
  {
    name: "森 晴日",
    year: "2015年入社",
    role: "総務部",
    catch: "研修制度あります",
    photo: "/voice_mori.jpg",
    quote:
      "新人研修から資格取得まで、一人ひとりの成長を後押しする仕組みがあります。安心して飛び込んできてください。",
  },
  {
    name: "林 広崇",
    year: "2019年入社",
    role: "空間情報事業部",
    catch: "アットホームな環境",
    photo: "/voice_hayashi.jpg",
    quote:
      "上下のキョリが近く、相談すれば必ず誰かが拾ってくれる。新人でも安心して挑戦できます。",
  },
];

export default function Voices() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const cardStep = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 320;
    const card = el.querySelector<HTMLElement>("[data-voice-card]");
    if (!card) return 320;
    // include the column gap (20px = gap-5)
    return card.offsetWidth + 20;
  }, []);

  const updateState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / cardStep());
    setActive(Math.min(Math.max(idx, 0), voices.length - 1));
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, [cardStep]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateState();
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scrollBy = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: cardStep() * dir, behavior: "smooth" });
  };

  const scrollTo = (i: number) => {
    scrollRef.current?.scrollTo({ left: cardStep() * i, behavior: "smooth" });
  };

  return (
    <section id="voice" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-dark text-center font-bold">
            EMPLOYEE INTERVIEW
          </p>
          <h2 className="mt-3 font-sans font-black text-4xl md:text-5xl text-navy text-center heading-display">
            社員インタビュー
          </h2>
          <p className="mt-5 text-center text-sm md:text-base text-navy/70 max-w-xl mx-auto leading-relaxed">
            執行役員から若手まで、多様な世代の声でリアルを伝えます。
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-7 h-px w-16 bg-gold origin-left"
          />
        </Reveal>

        {/* Header bar with progress + nav */}
        <div className="mt-12 flex items-center justify-between gap-6">
          <p className="text-xs tracking-widest text-navy/55 tabular-nums">
            <span className="text-navy font-bold">
              {String(active + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(voices.length).padStart(2, "0")}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="前のカード"
              className="w-11 h-11 rounded-full border border-navy/15 bg-white grid place-items-center hover:bg-navy hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-navy transition-colors text-navy"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="次のカード"
              className="w-11 h-11 rounded-full border border-navy/15 bg-white grid place-items-center hover:bg-navy hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-navy transition-colors text-navy"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Full-bleed slider */}
      <div
        ref={scrollRef}
        className="voice-scroller mt-8 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
        style={{
          paddingLeft: "max(1.5rem, calc((100vw - 72rem) / 2))",
          paddingRight: "max(1.5rem, calc((100vw - 72rem) / 2))",
        }}
      >
        {voices.map((v) => (
          <motion.article
            key={v.name}
            data-voice-card
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="snap-start shrink-0 w-[78vw] sm:w-[360px] md:w-[400px] rounded-2xl bg-sand border border-navy/10 shadow-soft overflow-hidden flex flex-col group hover:border-gold/40 transition-colors"
          >
            {/* Large portrait */}
            <div className="relative aspect-[4/5] bg-navy-dark overflow-hidden">
              <Image
                src={v.photo}
                alt={v.name}
                fill
                sizes="(max-width: 640px) 78vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent h-1/2 pointer-events-none" />
              {/* meta */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] tracking-[0.3em] text-gold-light font-bold">
                  {v.year}　{v.role}
                </p>
                <p className="mt-1 font-sans font-black text-2xl md:text-3xl text-white heading-display drop-shadow">
                  {v.name}
                </p>
              </div>
              {/* gold corner accent */}
              <span
                aria-hidden
                className="absolute top-4 left-4 text-[10px] tracking-[0.4em] text-gold-light/90 font-bold bg-navy/30 backdrop-blur px-2.5 py-1 rounded-full"
              >
                INTERVIEW
              </span>
            </div>

            {/* Body */}
            <div className="p-6 md:p-7 flex-1 flex flex-col bg-sand">
              <p className="text-gold-dark text-sm md:text-base tracking-wide font-bold border-l-2 border-gold pl-3">
                「{v.catch}」
              </p>
              <blockquote className="mt-4 text-sm text-navy/85 leading-loose flex-1">
                {v.quote}
              </blockquote>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Indicator dots */}
      <div className="max-w-6xl mx-auto px-6 mt-6 flex justify-center gap-2">
        {voices.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`${i + 1}番目のカードへ`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-navy" : "w-1.5 bg-navy/20 hover:bg-navy/40"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        .voice-scroller::-webkit-scrollbar {
          height: 6px;
        }
        .voice-scroller::-webkit-scrollbar-track {
          background: transparent;
        }
        .voice-scroller::-webkit-scrollbar-thumb {
          background: rgba(12, 43, 74, 0.12);
          border-radius: 3px;
        }
        .voice-scroller::-webkit-scrollbar-thumb:hover {
          background: rgba(12, 43, 74, 0.24);
        }
      `}</style>
    </section>
  );
}
