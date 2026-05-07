"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const voices = [
  {
    name: "高橋 博司",
    year: "1991年入社",
    role: "執行役員",
    catch: "優しさと思いやり",
    quote:
      "お客様と部下が喜ぶ姿が見られると、何よりも嬉しい。採用は人柄重視で、特に「思いやり」と「コミュニケーション」を見ています。",
  },
  {
    name: "紙本 真介",
    year: "2010年入社",
    role: "応用技術測量部",
    catch: "必要なのはガッツ！",
    quote:
      "現場での難所は技術より気合でひっくり返ることがあります。だからこそ、続けたい・挑みたいという気持ちのある人と働きたい。",
  },
  {
    name: "成田 慎",
    year: "2008年入社",
    role: "ソリューションプロバイダ部",
    catch: "文系でも大丈夫！",
    quote:
      "私は文系出身。最初は専門用語に圧倒されましたが、社内勉強会と先輩のサポートで一歩ずつ習得できました。学部は問いません。",
  },
  {
    name: "長砂 琢也",
    year: "2012年入社",
    role: "空間情報事業部",
    catch: "とことん付き合う",
    quote:
      "難しい現場ほど、技術と粘りで応える。お客様と長く付き合える仕事です。",
  },
  {
    name: "阿久津 尚大",
    year: "2013年入社",
    role: "空間情報事業部",
    catch: "軽いくらいが・・",
    quote:
      "重い仕事ほど、コミュニケーションは軽やかに。チームで動く現場では、これが意外と効きます。",
  },
  {
    name: "林 広崇",
    year: "2019年入社",
    role: "空間情報事業部",
    catch: "アットホームな環境",
    quote:
      "上下のキョリが近く、相談すれば誰かが必ず拾ってくれる。だから新人でも安心して挑戦できます。",
  },
];

export default function Voices() {
  return (
    <section id="voice" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold text-center">
            EMPLOYEE INTERVIEW
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
            社員インタビュー
          </h2>
          <p className="mt-4 text-center text-sm text-navy/65 max-w-xl mx-auto">
            測量歴30年超の執行役員から、入社5年目の若手まで。多様な世代の声から、現場のリアルが見えてきます。
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {voices.map((v) => (
            <StaggerItem key={v.name}>
              <motion.figure
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="rounded-2xl bg-sand p-7 border border-navy/10 h-full flex flex-col"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-navy grid place-items-center text-white font-serif">
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">{v.name}</p>
                    <p className="text-[11px] text-navy/55">
                      {v.year}　{v.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-gold text-xs tracking-widest font-bold">
                  「{v.catch}」
                </p>
                <blockquote className="mt-3 text-sm text-navy/80 leading-relaxed flex-1">
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
