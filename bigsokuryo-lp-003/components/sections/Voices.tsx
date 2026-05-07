const voices = [
  {
    name: "Y.T.（Iターン／東京→入社2年目）",
    family: "妻・小学生1人",
    quote:
      "東京の建設コンサルからの転職。家賃は半分、通勤は片道15分に。空いた時間を子どもの宿題に使えるようになりました。",
  },
  {
    name: "H.M.（Uターン／大阪→入社4年目）",
    family: "単身",
    quote:
      "大学進学で離れた地元に戻り、測量を仕事にしています。週末は川沿いをランニング。心の余白がはっきり違います。",
  },
];

export default function Voices() {
  return (
    <section id="voice" className="py-24 bg-emerald-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-emerald-700 text-center">
          U/I TURN STORIES
        </p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
          移ってきた、その後。
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {voices.map((v) => (
            <figure
              key={v.name}
              className="rounded-2xl bg-white p-8 border border-emerald-700/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-700 grid place-items-center text-white font-serif">
                  {v.name.charAt(0)}
                </div>
                <figcaption>
                  <p className="font-bold text-navy">{v.name}</p>
                  <p className="text-xs text-navy/60">家族構成：{v.family}</p>
                </figcaption>
              </div>
              <blockquote className="mt-6 text-sm text-navy/80 leading-relaxed">
                「{v.quote}」
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
