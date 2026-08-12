import LetterPop from "@/components/LetterPop";
import { LineButton } from "@/components/LineButton";

const SLIDES = ["/top-img.JPG", "/site-photo.jpg", "/works_img.jpg"];

export default function Hero() {
  const perSlide = 6;
  const total = SLIDES.length * perSlide;
  return (
    <section
      id="top"
      className="relative bg-white pt-[72px] md:pt-0 md:min-h-[100svh]"
    >
      {/* SP: 額縁レイアウト（左緑帯 + オフセット深緑帯） */}
      <div
        aria-hidden
        className="md:hidden absolute left-0 top-[72px] bottom-6 w-10 bg-brand"
      />
      <div
        aria-hidden
        className="md:hidden absolute left-4 right-0 bottom-0 h-8 bg-brand-deep"
      />

      <div className="relative ml-10 md:ml-0 mr-0 mt-0 md:mt-0 mb-8 md:mb-0 md:min-h-[100svh] overflow-hidden bg-black">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            aria-hidden
            className="absolute inset-0 bg-cover bg-center animate-kenburns"
            style={{
              backgroundImage: `url('${src}')`,
              animation: `kvfade ${total}s ease-in-out ${i * perSlide}s infinite`,
            }}
          />
        ))}
        <div aria-hidden className="absolute inset-0 bg-black/45" />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40 md:h-56 bg-gradient-to-t from-brand-deep/85 to-transparent"
        />

        <div
          aria-hidden
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-10"
        >
          {SLIDES.map((_, i) => (
            <span
              key={i}
              className={`block w-2 h-2 rounded-full ${
                i === 0 ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* SP: 右端縦ドット */}
        <div
          aria-hidden
          className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10"
        >
          {SLIDES.map((_, i) => (
            <span
              key={i}
              className={`block w-1.5 h-1.5 rounded-full ${
                i === 0 ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Scroll down (SP) */}
        <div
          aria-hidden
          className="md:hidden absolute left-3 bottom-4 z-10 flex flex-col items-center gap-2"
        >
          <span className="font-display text-[10px] tracking-[0.3em] text-white/85 [writing-mode:vertical-rl]">
            Scroll
          </span>
          <span className="block w-px h-8 bg-white/70" />
        </div>

        <div className="relative z-10 w-full min-h-[62vh] md:min-h-[100svh] flex items-center px-5 md:px-10 py-8 md:py-32 text-center text-white">
          <div className="w-full max-w-[1200px] mx-auto">
            <p className="font-display font-semibold tracking-[0.3em] md:tracking-[0.4em] text-[11px] md:text-sm text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              BIG SURVEY &amp; DESIGN
            </p>
            <h1 className="mt-4 md:mt-6 font-display font-extrabold text-[56px] md:text-[120px] leading-none tracking-tight whitespace-nowrap text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)]">
              <LetterPop text="RECRUIT" />
            </h1>

            <div className="mt-6 md:mt-12 inline-block border-2 md:border-[3px] border-white bg-brand-deep/60 backdrop-blur-sm px-4 md:px-12 py-4 md:py-8">
              <p className="font-sans font-extrabold text-lg md:text-3xl leading-[1.5] tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                &quot;未経験から、<br />
                国家資格で人生を変える。&quot;
              </p>
            </div>

            <p className="mt-6 md:mt-8 max-w-2xl mx-auto text-[12px] md:text-sm text-white/85 leading-relaxed">
              1980 年創業・社員 179 名。試験費用は会社全額負担で、<br className="hidden md:block" />
              未経験から国家資格取得をフルサポート。
            </p>

            <div className="mt-6 md:mt-10 flex flex-col items-center gap-3">
              <LineButton
                size="lg"
                location="hero"
                label="LINE でカジュアル面談を申し込む"
              />
              <p className="text-[11px] md:text-xs text-white/80 tracking-wide">
                登録は 30 秒 / 匿名の質問だけでも OK / 選考ではありません
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
