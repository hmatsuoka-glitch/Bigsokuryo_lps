const voices = [
  {
    name: "成田 慎",
    role: "ソリューションプロバイダ部",
    year: "2008年入社",
    catch: "文系でも大丈夫！",
    quote:
      "文系出身で入社。最初は測量機器の名前すら知らなかったけれど、先輩がじっくり教えてくれました。今は社内システム開発も担当しています。",
  },
  {
    name: "林 広崇",
    role: "空間情報事業部",
    year: "2019年入社",
    catch: "アットホームな環境",
    quote:
      "現場と内勤を行き来する日々。困ったときに「これどうやるの？」と気軽に聞ける空気があります。質問が小さくても、誰も嫌な顔をしないのがいい。",
  },
  {
    name: "紙本 真介",
    role: "応用技術測量部",
    year: "2010年入社",
    catch: "必要なのはガッツ！",
    quote:
      "鉄道工事測量はミリ単位の世界。最初の数年は本当に大変だったけれど、ガッツがあれば技術は後からついてきます。3D点群もレーザートラッカーも、ここで覚えました。",
  },
  {
    name: "阿久津 尚大",
    role: "空間情報事業部",
    year: "2013年入社",
    catch: "軽いくらいが、ちょうどいい",
    quote:
      "ピリピリした現場じゃない。野武士集団と言われたりもするけれど、根っこは思いやり。雑談から生まれる工夫が、現場の段取りを変えていきます。",
  },
];

export default function Voices() {
  return (
    <section id="voice" className="py-24 bg-emerald-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-emerald-700 text-center">
          MEMBER STORIES
        </p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
          ここにいる、人たち。
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {voices.map((v) => (
            <figure
              key={v.name}
              className="rounded-2xl bg-white p-8 border border-emerald-700/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-700 grid place-items-center text-white font-serif text-lg">
                  {v.name.charAt(0)}
                </div>
                <figcaption>
                  <p className="font-bold text-navy">{v.name}</p>
                  <p className="text-xs text-navy/60">
                    {v.role}／{v.year}
                  </p>
                </figcaption>
              </div>
              <p className="mt-5 text-emerald-700 font-bold text-sm">
                ― {v.catch}
              </p>
              <blockquote className="mt-3 text-sm text-navy/80 leading-relaxed">
                「{v.quote}」
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
