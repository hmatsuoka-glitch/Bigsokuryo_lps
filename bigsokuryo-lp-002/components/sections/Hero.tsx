import LetterPop from "@/components/LetterPop";
import { LineButton } from "@/components/LineButton";

const HERO_IMAGE = "/DSC00589.JPG";

export default function Hero() {
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
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        <div aria-hidden className="absolute inset-0 bg-black/45" />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40 md:h-56 bg-gradient-to-t from-brand-deep/85 to-transparent"
        />

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

        <div className="relative z-10 w-full min-h-[62vh] md:min-h-[100svh] flex items-center px-5 md:px-10 py-8 md:py-24 text-center text-white">
          <div className="w-full max-w-[1200px] mx-auto">
            <p className="font-display font-semibold tracking-[0.3em] md:tracking-[0.4em] text-[11px] md:text-sm text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              BIG SURVEY &amp; DESIGN
            </p>
            <h1 className="mt-3 md:mt-5 font-display font-extrabold text-[56px] md:text-[120px] leading-none tracking-tight whitespace-nowrap text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)]">
              <LetterPop text="RECRUIT" />
            </h1>

            <div className="mt-8 md:mt-14 inline-block border-2 md:border-[3px] border-white bg-brand-deep/70 backdrop-blur-sm px-5 md:px-16 py-6 md:py-12">
              <p className="font-sans font-extrabold text-[26px] md:text-5xl leading-[1.4] tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                &quot;未経験から、<br />
                <span className="text-white">国家資格で人生を変える。</span>&quot;
              </p>
            </div>

            <div className="mt-8 md:mt-12 flex flex-col items-center gap-3">
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
