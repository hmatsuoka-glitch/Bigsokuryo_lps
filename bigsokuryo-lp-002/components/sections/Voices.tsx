import Reveal from "@/components/Reveal";

type Member = {
  photo: string;
  name: string;
  role?: string;
  dept?: string;
  joined: string;
  catch: string;
  body: string;
};

const featured: Member = {
  photo: "/高橋.jpg",
  name: "高橋 博司",
  role: "執行役員",
  joined: "1991 年入社",
  catch: "優しさと思いやり",
  body: "「お客様と部下が喜ぶ姿が見られると嬉しい」── 採用で何より大切にするのは「思いやり」と「コミュニケーション」。工事現場をコア事業に、公共測量・IT コンテンツ・精密機器・写真技術まで広く対応する会社で、素直さを持ち合わせた人を最後まで育てきる文化があります。",
};

const voices: Member[] = [
  {
    photo: "/紙元.jpg",
    name: "紙本 真介",
    dept: "応用技術測量部",
    joined: "2010 年入社",
    catch: "必要なのはガッツ！",
    body: "現場でしか学べないことの連続。鉄道の線路閉鎖案件や 1 ミクロン単位の精密測量など、他では触れない案件に最初から関われます。「自分の頭で考えて動く」を歓迎する文化が、提案を即現場で試せる空気をつくっています。",
  },
  {
    photo: "/成田.jpg",
    name: "成田 慎",
    dept: "ソリューションプロバイダ部",
    joined: "2008 年入社",
    catch: "文系でも大丈夫！",
    body: "文系出身でしたが、研修・資格支援・先輩のフォローで段々と現場で使える技術が身につきました。ビッグ測量設計は「人柄重視」と本気で言える環境で、不器用でも前向きなら必ず育ててもらえます。",
  },
  {
    photo: "/長砂.jpg",
    name: "長砂 琢也",
    dept: "空間情報事業部",
    joined: "2012 年入社",
    catch: "とことん付き合う",
    body: "3D レーザースキャナや写真測量で取った点群を、3DCG にしてお客様に見せる ―― そこまで一気通貫でやれる会社はそう多くないです。文化財調査や駅構内の支障物調査など、技術が直接価値になる仕事を任せてもらえる感覚があります。",
  },
  {
    photo: "/阿久津.jpg",
    name: "阿久津 尚大",
    dept: "空間情報事業部",
    joined: "2013 年入社",
    catch: "軽いくらいが・・",
    body: "張り詰めた現場ほど、肩の力を抜くのが大事だと思っています。空間情報の仕事は最終的にチーム戦。仲間と組んで、笑いながらやれる雰囲気がうちの強みです。",
  },
  {
    photo: "/森晴日.jpg",
    name: "森 晴日",
    dept: "総務部",
    joined: "2015 年入社",
    catch: "研修制度あります",
    body: "現場と本社をつなぐ立場で、新しく入る方を制度の面からサポート。資格支援 (測量士・測量士補の試験費用は会社負担)、年 2 回の社内勉強会など、学び続けられる仕組みは私たちが整えています。",
  },
  {
    photo: "/林.jpg",
    name: "林 広崇",
    dept: "空間情報事業部",
    joined: "2019 年入社",
    catch: "アットホームな環境",
    body: "先輩との距離が近く、聞きたいことをすぐ聞ける ── 入社して一番感じたのはそこです。最先端の技術を扱う会社なのに、人と人の距離が近い。働きやすさは間違いなく自慢できます。",
  },
];

function PhotoFrame({
  src,
  alt,
  size = "md",
}: {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "lg"
      ? "w-full aspect-square md:aspect-[4/5]"
      : size === "md"
      ? "w-14 h-14 md:w-20 md:h-20"
      : "w-12 h-12 md:w-16 md:h-16";
  return (
    <div
      className={`${sizeClass} overflow-hidden flex-none ring-1 ring-navy/10 bg-sand relative`}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        aria-hidden
        className="absolute inset-0 ring-1 ring-inset ring-white/40"
      />
    </div>
  );
}

function MobileCard({
  m,
  isFeatured,
}: {
  m: Member;
  isFeatured?: boolean;
}) {
  return (
    <article className="snap-center flex-none w-[85vw] max-w-[380px] bg-white border border-navy/10 p-5 flex flex-col">
      <div className="aspect-square overflow-hidden bg-sand">
        <img
          src={m.photo}
          alt={m.name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-5 text-[10px] tracking-[0.4em] text-gold">
        {isFeatured ? "FEATURED MESSAGE" : m.dept}
      </p>
      <p className="mt-2 text-xs text-black/55">
        {isFeatured && m.role ? `${m.role} / ${m.joined}` : m.joined}
      </p>
      <h3 className="mt-1 font-sans font-bold text-xl text-navy leading-tight">
        {m.name}
      </h3>
      <p className="mt-4 font-sans font-bold text-2xl text-navy leading-snug border-l-2 border-gold pl-3">
        「{m.catch}」
      </p>
      <p className="mt-4 text-sm text-black/75 leading-relaxed">{m.body}</p>
    </article>
  );
}

export default function Voices() {
  const all: (Member & { isFeatured: boolean })[] = [
    { ...featured, isFeatured: true },
    ...voices.map((v) => ({ ...v, isFeatured: false })),
  ];

  return (
    <section
      id="voice"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl"
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-gold">INTERVIEW</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            現場で働く人を、知る。
          </h2>
          <p className="mt-5 text-center text-black/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            「優しさと思いやり」を企業理念にする、いわゆる &quot;野武士集団&quot;。
            仲間を大切にする文化が、長く続く理由です。
          </p>
        </Reveal>

        <div className="md:hidden mt-10">
          <div className="-mx-6 px-6 overflow-x-auto snap-x snap-mandatory flex gap-3 pb-4 scroll-px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {all.map((m) => (
              <MobileCard key={m.name} m={m} isFeatured={m.isFeatured} />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-center gap-3 text-[10px] tracking-[0.3em] text-black/45">
            <span aria-hidden>←</span>
            <span>SWIPE</span>
            <span aria-hidden>→</span>
          </div>
        </div>

        <div className="hidden md:block">
          <Reveal delay={150} className="mt-14">
            <article className="card-hover group grid md:grid-cols-12 gap-6 md:gap-10 bg-gradient-to-br from-sand/40 via-white to-sand/30 border border-navy/10 p-6 md:p-10 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl"
              />
              <div className="relative md:col-span-5">
                <PhotoFrame
                  src={featured.photo}
                  alt={featured.name}
                  size="lg"
                />
              </div>
              <div className="relative md:col-span-7 flex flex-col justify-center">
                <p className="text-[10px] tracking-[0.4em] text-gold">
                  FEATURED MESSAGE
                </p>
                <p className="mt-3 text-xs tracking-widest text-black/55">
                  {featured.role} / {featured.joined}
                </p>
                <h3 className="mt-1 font-sans font-bold text-2xl md:text-3xl text-navy">
                  {featured.name}
                </h3>
                <p className="mt-5 text-2xl md:text-3xl font-sans font-bold leading-tight bg-gradient-to-r from-navy to-navy/70 bg-clip-text text-transparent">
                  「{featured.catch}」
                </p>
                <p className="mt-5 text-sm md:text-base text-black/75 leading-relaxed">
                  {featured.body}
                </p>
              </div>
            </article>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {voices.map((v, i) => (
              <Reveal
                key={v.name}
                delay={i * 90}
                as="article"
                className="card-hover group bg-white p-4 md:p-7 border border-navy/10 relative overflow-hidden flex flex-col"
              >
                <span
                  aria-hidden
                  className="absolute -top-2 right-4 text-7xl font-serif text-gold/15 leading-none select-none pointer-events-none"
                >
                  &ldquo;
                </span>
                <div className="relative flex items-start gap-4">
                  <PhotoFrame src={v.photo} alt={v.name} size="md" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] tracking-widest text-gold">
                      {v.dept}
                    </p>
                    <p className="mt-1.5 font-sans font-bold text-navy text-lg leading-tight">
                      {v.name}
                    </p>
                    <p className="text-[11px] text-black/55 mt-0.5">
                      {v.joined}
                    </p>
                  </div>
                </div>
                <p className="relative mt-4 md:mt-5 font-sans font-bold text-sm md:text-base text-navy leading-snug border-l-2 border-gold pl-3">
                  「{v.catch}」
                </p>
                <p className="relative mt-4 text-sm text-black/75 leading-relaxed flex-1">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
