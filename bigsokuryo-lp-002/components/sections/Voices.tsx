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
  photoStyle?: React.CSSProperties;
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
    photoStyle: { filter: "brightness(0.9) contrast(1.15) saturate(1.05)" },
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

function Card({ m }: { m: Member }) {
  return (
    <article className="snap-center flex-none w-[85vw] sm:w-[70vw] md:w-[720px] max-w-[720px]">
      <div className="grid md:grid-cols-2 gap-0 bg-white shadow-[0_20px_60px_-30px_rgba(11,64,34,0.35)] overflow-hidden">
        <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[480px] bg-brand-soft">
          <img
            src={m.photo}
            alt={m.name}
            className="w-full h-full object-cover"
            style={m.photoStyle}
          />
          <div className="absolute top-3 left-3 flex items-end gap-2 leading-none">
            <span className="font-display font-extrabold text-white text-[56px] md:text-[80px] drop-shadow-lg">
              {m.no}
            </span>
            <span className="font-display font-semibold text-white text-[10px] tracking-[0.3em] pb-2 md:pb-3">
              PERSON
            </span>
          </div>
        </div>
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <p className="text-[11px] md:text-xs text-sub tracking-wide">
            {m.dept} / {m.joined}
          </p>
          <h3 className="mt-2 font-sans font-extrabold text-2xl md:text-3xl text-brand-deep leading-tight">
            {m.name}
          </h3>
          <p className="mt-4 font-sans font-extrabold text-xl md:text-2xl text-brand leading-snug border-l-2 border-brand pl-3">
            「{m.catch}」
          </p>
          <p className="mt-5 text-[14px] md:text-[15px] text-sub leading-[1.95]">
            {m.body}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Voices() {
  return (
    <section id="person" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
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
              「優しさと思いやり」を企業理念に、現場では頼れるプロフェッショナル集団。
              仲間を大切にする文化が、長く続く理由です。
            </p>
          </div>
        </div>
      </div>

      {/* 横スワイプカルーセル: 1 人ずつ大きく表示 */}
      <div className="mt-10 md:mt-16">
        <div className="overflow-x-auto snap-x snap-mandatory flex gap-4 md:gap-6 px-5 md:px-10 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {members.map((m) => (
            <Card key={m.name} m={m} />
          ))}
          <span aria-hidden className="flex-none w-2" />
        </div>
        <div className="mt-4 flex items-center justify-center gap-3 text-[10px] tracking-[0.3em] text-black/45">
          <span aria-hidden>←</span>
          <span>SWIPE</span>
          <span aria-hidden>→</span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 mt-10 md:mt-16 flex flex-col items-center gap-3">
        <LineButton
          size="md"
          location="mid"
          label="カジュアル面談を申し込む"
        />
        <a
          href="https://lmasters.aigrowthx.pro/r/cmr1grzbk000d7opih9jrvrr1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-brand-deep hover:text-brand underline underline-offset-4 transition-colors"
        >
          まずは LINE で質問だけしてみる →
        </a>
      </div>
    </section>
  );
}
