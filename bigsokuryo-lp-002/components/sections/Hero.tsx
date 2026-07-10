import LetterPop from "@/components/LetterPop";

const SLIDES = ["/top-img.JPG", "/site-photo.jpg", "/works_img.jpg"];

export default function Hero() {
  const perSlide = 6;
  const total = SLIDES.length * perSlide;
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-black text-white min-h-[100svh] flex items-center"
    >
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
      <div
        aria-hidden
        className="absolute inset-0 bg-black/45"
      />
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

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
        <p className="font-display font-semibold tracking-[0.4em] text-[11px] md:text-sm text-white/85">
          BIG SURVEY &amp; DESIGN
        </p>
        <h1 className="mt-4 md:mt-6 font-display font-extrabold text-[64px] md:text-[120px] leading-none tracking-tight">
          <LetterPop text="RECRUIT" />
        </h1>

        <div className="mt-8 md:mt-12 inline-block border-2 md:border-[3px] border-white px-6 md:px-12 py-5 md:py-8">
          <p className="font-sans font-extrabold text-xl md:text-3xl leading-[1.5] tracking-tight">
            &quot;未経験から、<br />
            国家資格で人生を変える。&quot;
          </p>
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-xs md:text-sm text-white/85 leading-relaxed">
          1980 年創業・社員 179 名。試験費用は会社全額負担で、<br className="hidden md:block" />
          未経験から国家資格取得をフルサポート。
        </p>
      </div>
    </section>
  );
}
