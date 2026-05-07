const voices = [
  {
    name: "応用技術測量部 (入社 14 年)",
    prev: "前職：建設系測量会社",
    quote:
      "ここでの仕事は、現場でしか学べないことの連続。鉄道の線路閉鎖案件や 1 ミクロン単位の精密測量など、他では触れない案件に最初から関われます。「自分の頭で考えて動く」を歓迎する文化なので、提案がすぐに現場で試せるのが楽しい。",
  },
  {
    name: "空間情報事業部 (入社 12 年)",
    prev: "前職：地理空間データベンダー",
    quote:
      "3D レーザースキャナや写真測量で取った点群を、3DCG にしてお客様に見せる ―― そこまで一気通貫でやれる会社はそう多くないです。文化財調査や駅構内の支障物調査など、技術が直接価値になる仕事を任せてもらえる感覚があります。",
  },
  {
    name: "ソリューションプロバイダ部 (入社 16 年)",
    prev: "前職：他業種からの転身",
    quote:
      "文系出身でしたが、研修・資格支援・先輩のフォローで段々と現場で使える技術が身につきました。ビッグ測量は「人柄重視」と本気で言える環境で、不器用でも前向きなら必ず育ててもらえます。",
  },
];

export default function Voices() {
  return (
    <section id="voice" className="py-24 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-gold text-center">
          INTERVIEW
        </p>
        <h2 className="mt-3 font-sans font-bold text-3xl md:text-4xl text-navy text-center">
          現場で働くエンジニアたち
        </h2>
        <p className="mt-4 text-center text-navy/70 text-sm max-w-xl mx-auto">
          「優しさと思いやり」を企業理念にする、いわゆる &quot;野武士集団&quot;。
          仲間を大切にする文化が、長く続く理由です。
        </p>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {voices.map((v) => (
            <figure
              key={v.name}
              className="rounded-2xl bg-white p-7 border border-navy/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-rose-700 grid place-items-center text-white font-sans font-bold flex-none">
                  {v.name.charAt(0)}
                </div>
                <figcaption className="min-w-0">
                  <p className="font-bold text-navy text-sm leading-tight">
                    {v.name}
                  </p>
                  <p className="text-xs text-navy/60 mt-1">{v.prev}</p>
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
