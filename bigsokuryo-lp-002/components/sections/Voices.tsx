const voices = [
  {
    name: "K.A.（38歳・入社4年）",
    prev: "前職：大手ゼネコン測量部門",
    quote:
      "前職では工種が固定されがちでしたが、ここでは点群処理から境界確定まで横断的に経験できる。専門の幅が広がりました。",
  },
  {
    name: "R.S.（45歳・入社2年）",
    prev: "前職：地方自治体（建設課）",
    quote:
      "発注者側だった経験を、いまは受注側で活かしています。役所案件の勘所を理解した上で動けるのは強みになります。",
  },
];

export default function Voices() {
  return (
    <section id="voice" className="py-24 bg-sand">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-gold text-center">
          INTERVIEW
        </p>
        <h2 className="mt-3 font-sans font-bold text-3xl md:text-4xl text-navy text-center">
          ジョインしたエンジニアたち
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {voices.map((v) => (
            <figure
              key={v.name}
              className="rounded-2xl bg-white p-8 border border-navy/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-rose-700 grid place-items-center text-white font-sans font-bold">
                  {v.name.charAt(0)}
                </div>
                <figcaption>
                  <p className="font-bold text-navy">{v.name}</p>
                  <p className="text-xs text-navy/60">{v.prev}</p>
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
