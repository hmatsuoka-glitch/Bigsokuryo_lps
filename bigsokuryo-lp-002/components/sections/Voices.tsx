import Reveal from "@/components/Reveal";

type Member = {
  photo: string;
  name: string;
  role?: string;
  dept?: string;
  joined: string;
  catch: string;
  body: string;
  isFeatured?: boolean;
};

const members: Member[] = [
  {
    photo: "/高橋.jpg",
    name: "高橋 博司",
    role: "執行役員",
    joined: "1991 年入社",
    catch: "優しさと思いやり",
    body: "「お客様と部下が喜ぶ姿が見られると嬉しい」── 採用で何より大切にするのは「思いやり」と「コミュニケーション」。素直さを持ち合わせた人を最後まで育てきる文化があります。",
    isFeatured: true,
  },
  {
    photo: "/紙元.jpg",
    name: "紙本 真介",
    dept: "応用技術測量部",
    joined: "2010 年入社",
    catch: "必要なのはガッツ！",
    body: "現場でしか学べないことの連続。鉄道の線路閉鎖案件や 1 ミクロン単位の精密測量など、他では触れない案件に最初から関われます。「自分の頭で考えて動く」を歓迎する文化です。",
  },
  {
    photo: "/成田.jpg",
    name: "成田 慎",
    dept: "ソリューションプロバイダ部",
    joined: "2008 年入社",
    catch: "文系でも大丈夫！",
    body: "文系出身でしたが、研修・資格支援・先輩のフォローで段々と現場で使える技術が身につきました。「人柄重視」と本気で言える環境で、不器用でも前向きなら必ず育ててもらえます。",
  },
  {
    photo: "/長砂.jpg",
    name: "長砂 琢也",
    dept: "空間情報事業部",
    joined: "2012 年入社",
    catch: "とことん付き合う",
    body: "3D レーザースキャナや写真測量で取った点群を、3DCG にしてお客様に見せる ── そこまで一気通貫でやれる会社はそう多くない。技術がそのまま価値になる仕事を任せてもらえます。",
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
    body: "現場と本社をつなぐ立場で、新しく入る方を制度の面からサポート。資格支援・年 2 回の社内勉強会など、学び続けられる仕組みは私たちが整えています。",
  },
  {
    photo: "/林.jpg",
    name: "林 広崇",
    dept: "空間情報事業部",
    joined: "2019 年入社",
    catch: "アットホームな環境",
    body: "先輩との距離が近く、聞きたいことをすぐ聞ける ── 入社して一番感じたのはそこです。最先端の技術を扱う会社なのに、人と人の距離が近いのが自慢です。",
  },
];

function MemberCard({ m }: { m: Member }) {
  return (
    <article className="snap-center flex-none w-[78vw] sm:w-[60vw] md:w-[42vw] lg:w-[30vw] max-w-[380px] bg-white border border-navy/10 p-5 flex flex-col">
      <div className="aspect-square overflow-hidden bg-sand">
        <img
          src={m.photo}
          alt={m.name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-5 text-[10px] tracking-[0.4em] text-gold">
        {m.isFeatured ? "FEATURED MESSAGE" : m.dept}
      </p>
      <p className="mt-2 text-xs text-black/55">
        {m.isFeatured && m.role ? `${m.role} / ${m.joined}` : m.joined}
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
  return (
    <section id="voice" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
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
      </div>

      <div className="mt-10 md:mt-14">
        <div className="px-6 overflow-x-auto snap-x snap-mandatory flex gap-3 md:gap-5 pb-4 scroll-px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {members.map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
          <span aria-hidden className="flex-none w-2" />
        </div>
        <div className="mt-3 flex items-center justify-center gap-3 text-[10px] tracking-[0.3em] text-black/45">
          <span aria-hidden>←</span>
          <span>SWIPE</span>
          <span aria-hidden>→</span>
        </div>
      </div>
    </section>
  );
}
