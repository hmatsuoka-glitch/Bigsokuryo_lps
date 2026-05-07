"use client";

import { Reveal } from "@/components/Motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold">ABOUT US</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy">
            測量は、
            <br />
            未来を準備する仕事。
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
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
        </Reveal>
      </div>
    </section>
  );
}
