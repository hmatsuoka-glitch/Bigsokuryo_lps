"use client";

import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Motion";

const voices = [
  {
    name: "成田 慎",
    role: "ソリューションプロバイダ部",
    year: "2008年入社",
    catch: "文系でも大丈夫！",
    quote:
      "文系出身で入社。最初は測量機器の名前すら知らなかったけれど、先輩がじっくり教えてくれました。今は社内システム開発も担当しています。",
    photo: "/成田.jpg",
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    name: "林 広崇",
    role: "空間情報事業部",
    year: "2019年入社",
    catch: "アットホームな環境",
    quote:
      "現場と内勤を行き来する日々。困ったときに「これどうやるの？」と気軽に聞ける空気があります。質問が小さくても、誰も嫌な顔をしないのがいい。",
    photo: "/林.jpg",
    gradient: "from-teal-500 to-emerald-700",
  },
  {
    name: "紙本 真介",
    role: "応用技術測量部",
    year: "2010年入社",
    catch: "必要なのはガッツ！",
    quote:
      "鉄道工事測量はミリ単位の世界。最初の数年は本当に大変だったけれど、ガッツがあれば技術は後からついてきます。3D点群もレーザートラッカーも、ここで覚えました。",
    photo: "/紙元.jpg",
    gradient: "from-amber-500 to-emerald-700",
  },
  {
    name: "阿久津 尚大",
    role: "空間情報事業部",
    year: "2013年入社",
    catch: "軽いくらいが、ちょうどいい",
    quote:
      "ピリピリした現場じゃない。野武士集団と言われたりもするけれど、根っこは思いやり。雑談から生まれる工夫が、現場の段取りを変えていきます。",
    photo: "/阿久津.jpg",
    gradient: "from-sky-500 to-teal-700",
  },
];

export default function Voices() {
  return (
    <section
      id="voice"
      className="relative py-28 bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-emerald-50 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-amber-100/40 blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-emerald-700 font-bold">
            MEMBER STORIES
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy font-bold tracking-tight">
            ここにいる、<span className="text-emerald-700">人たち</span>。
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-2 gap-3 md:gap-6">
          {voices.map((v) => (
            <StaggerItem key={v.name}>
              <figure className="group h-full bg-white p-4 md:p-8 border border-emerald-700/15 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500">
                <div className="flex items-center gap-3 md:gap-5">
                  <div
                    className={`relative shrink-0 w-14 h-14 md:w-20 md:h-20 overflow-hidden bg-gradient-to-br ${v.gradient} shadow-lg ring-2 ring-white group-hover:scale-105 transition-transform duration-500`}
                  >
                    <Image
                      src={v.photo}
                      alt={`${v.name}の写真`}
                      fill
                      sizes="(max-width: 768px) 56px, 80px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="min-w-0">
                    <p className="font-bold text-navy text-sm md:text-lg leading-tight">
                      {v.name}
                    </p>
                    <p className="text-[10px] md:text-xs text-navy/55 mt-1 leading-snug">
                      {v.role}<br className="md:hidden" />
                      <span className="hidden md:inline">／</span>
                      {v.year}
                    </p>
                  </figcaption>
                </div>
                <p className="mt-4 md:mt-6 inline-flex items-center gap-1.5 px-2.5 md:px-3 py-1 rounded-full bg-emerald-700/10 text-emerald-800 font-bold text-[11px] md:text-sm">
                  ― {v.catch}
                </p>
                <blockquote className="mt-3 md:mt-4 text-xs md:text-base text-navy/80 leading-[1.85]">
                  {v.quote}
                </blockquote>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
