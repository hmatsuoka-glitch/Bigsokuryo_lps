export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs tracking-[0.4em] text-emerald-700">WHY HERE</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy leading-snug">
            「都市で消耗しない」<br />
            選択肢として。
          </h2>
        </div>
        <div className="space-y-5 text-navy/80 leading-relaxed">
          <p>
            ビッグ測量の本社・事業所は、いずれも県庁所在地から車で30〜60分。
            自然と仕事のバランスがとれる距離感です。
          </p>
          <p>
            社員のうち約3割がUターン・Iターン経験者。
            移住前の不安を経験者がフォローする「移住バディ制度」があります。
          </p>
          <blockquote className="border-l-4 border-emerald-700 pl-4 text-navy/90">
            「一度東京に出たけれど、地元で測量の仕事ができると知って戻ってきました。
            通勤も含めて、暮らしの密度が変わりました。」<br />
            — Iターン入社・5年目
          </blockquote>
        </div>
      </div>
    </section>
  );
}
