export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs tracking-[0.4em] text-emerald-700">WHY US</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy leading-snug">
            「人」を軸に、<br />
            技術を積み上げる。
          </h2>
          <p className="mt-6 text-sm text-navy/60 leading-relaxed">
            東京駅丸の内駅舎の復原、銀座線渋谷駅の移設、海の森水上競技場（2020東京五輪）――
            ビッグ測量設計の名前は、首都圏の主要プロジェクトに刻まれてきました。
          </p>
        </div>
        <div className="space-y-5 text-navy/80 leading-relaxed">
          <p>
            鉄道・空港・トンネル・道路・公共測量。1ミクロン（0.001mm）の高精度測量を
            支える特許技術や、レーザートラッカー・3Dレーザースキャナといった先端機材を備える一方で、
            私たちが社内で繰り返している言葉は「<strong>優しさ・思いやり</strong>」です。
          </p>
          <p>
            採用で見るのは、スキルや学歴ではなく人柄。
            「素直な人」「不器用でも前に進める人」を歓迎し、文系・未経験から
            測量士になった先輩が、いまも現場の中心にいます。
          </p>
          <blockquote className="border-l-4 border-emerald-700 pl-4 text-navy/90">
            「お客様と、部下が喜ぶ姿が見られると嬉しい。<br />
            会社の真ん中にあるのは、思いやりです。」<br />
            <span className="text-sm text-navy/60">— 執行役員 高橋 博司（1991年入社）</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
