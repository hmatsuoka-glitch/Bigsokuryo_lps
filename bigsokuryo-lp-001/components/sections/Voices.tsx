"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const voices = [
  {
    name: "高橋 博司",
    year: "1991年入社",
    role: "執行役員",
    catch: "優しさと思いやり",
    photo: "/voice_takahashi.jpg",
    quote:
      "お客様と部下が喜ぶ姿が見られると、何よりも嬉しい。採用は人柄重視で、特に「思いやり」と「コミュニケーション」を見ています。",
  },
  {
    name: "紙元 真介",
    year: "2010年入社",
    role: "応用技術測量部",
    catch: "必要なのはガッツ！",
    photo: "/voice_kamimoto.jpg",
    quote:
      "現場での難所は技術より気合でひっくり返ることがあります。だからこそ、続けたい・挑みたいという気持ちのある人と働きたい。",
  },
  {
    name: "成田 慎",
    year: "2008年入社",
    role: "ソリューションプロバイダ部",
    catch: "文系でも大丈夫！",
    photo: "/voice_narita.jpg",
    quote:
      "私は文系出身。最初は専門用語に圧倒されましたが、社内勉強会と先輩のサポートで一歩ずつ習得できました。学部は問いません。",
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
      "新人研修から資格取得サポートまで、社員一人ひとりの成長を後押しする仕組みを整えています。安心して飛び込んできてください。",
  },
  {
    name: "林 広崇",
    year: "2019年入社",
    role: "空間情報事業部",
    catch: "アットホームな環境",
    photo: "/voice_hayashi.jpg",
    quote:
      "上下のキョリが近く、相談すれば誰かが必ず拾ってくれる。だから新人でも安心して挑戦できます。",
  },
];

export default function Voices() {
  return (
    <section id="voice" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.5em] text-gold-dark text-center font-bold">
            EMPLOYEE INTERVIEW
          </p>
          <h2 className="mt-3 font-sans font-black text-4xl md:text-5xl text-navy text-center heading-display">
            社員インタビュー
          </h2>
          <p className="mt-5 text-center text-sm md:text-base text-navy/70 max-w-xl mx-auto leading-relaxed">
            測量歴30年超の執行役員から、入社5年目の若手まで。
            <br className="hidden md:block" />
            多様な世代の声から、現場のリアルが見えてきます。
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-7 h-px w-16 bg-gold origin-left"
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {voices.map((v) => (
            <StaggerItem key={v.name}>
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative rounded-2xl bg-sand p-7 border border-navy/10 shadow-soft h-full flex flex-col overflow-hidden hover:border-gold/40 transition-colors"
              >
                <span
                  aria-hidden
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gold/0 group-hover:bg-gold/15 transition-colors duration-500 blur-2xl"
                />

                <div className="relative flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-soft shrink-0 bg-navy/5">
                    <Image
                      src={v.photo}
                      alt={v.name}
                      fill
                      sizes="64px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans font-bold text-navy text-base truncate">
                      {v.name}
                    </p>
                    <p className="text-[11px] text-navy/55 mt-0.5 truncate">
                      {v.year}　{v.role}
                    </p>
                  </div>
                </div>

                <p className="relative mt-6 text-gold-dark text-sm tracking-wide font-bold border-l-2 border-gold pl-3">
                  「{v.catch}」
                </p>
                <blockquote className="relative mt-4 text-sm text-navy/85 leading-loose flex-1">
                  {v.quote}
                </blockquote>
              </motion.figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
