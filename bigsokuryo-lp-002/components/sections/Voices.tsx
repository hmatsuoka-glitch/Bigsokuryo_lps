import TextReveal from "@/components/TextReveal";
import { LineButton } from "@/components/LineButton";

type Member = {
  no: string;
  photo: string;
  name: string;
  dept: string;
  joined: string;
  catch: string;
  body: string;
};

const members: Member[] = [
  {
    no: "01",
    photo: "/紙元.jpg",
    name: "紙本 真介",
    dept: "応用技術測量部",
    joined: "2010 年入社",
    catch: "必要なのはガッツ！",
    body: "現場でしか学べないことの連続。鉄道の線路閉鎖案件や 1 ミクロン単位の精密測量など、他では触れない案件に最初から関われます。「自分の頭で考えて動く」を歓迎する文化です。",
  },
  {
    no: "02",
    photo: "/成田.jpg",
    name: "成田 慎",
    dept: "ソリューションプロバイダ部",
    joined: "2008 年入社",
    catch: "文系でも大丈夫！",
    body: "文系出身でしたが、研修・資格支援・先輩のフォローで段々と現場で使える技術が身につきました。「人柄重視」と本気で言える環境で、不器用でも前向きなら必ず育ててもらえます。",
  },
  {
    no: "03",
    photo: "/長砂.jpg",
    name: "長砂 琢也",
    dept: "空間情報事業部",
    joined: "2012 年入社",
    catch: "とことん付き合う",
    body: "3D レーザースキャナや写真測量で取った点群を、3DCG にしてお客様に見せる ── そこまで一気通貫でやれる会社はそう多くない。技術がそのまま価値になる仕事を任せてもらえます。",
  },
  {
    no: "04",
    photo: "/阿久津.jpg",
    name: "阿久津 尚大",
    dept: "空間情報事業部",
    joined: "2013 年入社",
    catch: "軽いくらいが・・",
    body: "張り詰めた現場ほど、肩の力を抜くのが大事だと思っています。空間情報の仕事は最終的にチーム戦。仲間と組んで、笑いながらやれる雰囲気がうちの強みです。",
  },
  {
    no: "05",
    photo: "/林.jpg",
    name: "林 広崇",
    dept: "空間情報事業部",
    joined: "2019 年入社",
    catch: "アットホームな環境",
    body: "先輩との距離が近く、聞きたいことをすぐ聞ける ── 入社して一番感じたのはそこです。最先端の技術を扱う会社なのに、人と人の距離が近いのが自慢です。",
  },
];

function Card({ m, offset }: { m: Member; offset: boolean }) {
  return (
    <article className={`relative ${offset ? "mt-16 md:mt-24" : ""}`}>
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-soft">
        <img
          src={m.photo}
          alt={m.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 md:top-4 md:left-4 flex items-end gap-1.5 leading-none">
          <span className="font-display font-extrabold text-white text-[40px] md:text-[80px] drop-shadow-lg">
            {m.no}
          </span>
          <span className="font-display font-semibold text-white text-[9px] md:text-xs tracking-[0.3em] pb-1.5 md:pb-3">
            PERSON
          </span>
        </div>
      </div>
      <p className="mt-3 md:mt-5 text-[11px] md:text-xs text-sub tracking-wide">
        {m.dept} / {m.joined}
      </p>
      <h3 className="mt-1 font-sans font-extrabold text-base md:text-3xl text-brand-deep leading-tight">
        {m.name}
      </h3>
      <p className="mt-2 md:mt-3 font-sans font-extrabold text-sm md:text-2xl text-brand leading-snug">
        「{m.catch}」
      </p>
      <p className="mt-3 md:mt-4 text-[13px] md:text-[15px] text-sub leading-[1.9]">
        {m.body}
      </p>
    </article>
  );
}

export default function Voices() {
  return (
    <section id="person" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="md:col-span-7">
            <p className="font-display font-semibold text-xs md:text-sm tracking-widest text-brand">
              [ Person ]
            </p>
            <h2 className="mt-3 font-display font-extrabold text-[52px] md:text-[96px] lg:text-[105px] leading-[0.95] tracking-tight text-brand-deep whitespace-nowrap">
              Person
            </h2>
            <p className="mt-3 font-sans font-bold text-lg md:text-2xl tracking-wide text-ink">
              働く人を知る
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm md:text-base text-sub leading-[2]">
              「優しさと思いやり」を企業理念にする、いわゆる &quot;野武士集団&quot;。
              仲間を大切にする文化が、長く続く理由です。
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-x-10 md:gap-y-20">
          {members.map((m, i) => (
            <TextReveal key={m.name} delay={i * 80}>
              <Card m={m} offset={i % 2 === 1} />
            </TextReveal>
          ))}
        </div>

        <div className="mt-14 md:mt-20 flex justify-center">
          <LineButton
            size="md"
            location="person_cta"
            label="カジュアル面談を申し込む"
          />
        </div>
      </div>
    </section>
  );
}
