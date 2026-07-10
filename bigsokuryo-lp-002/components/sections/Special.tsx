import TextReveal from "@/components/TextReveal";

export default function Special() {
  return (
    <section
      id="special"
      className="relative bg-brand-deep text-white py-24 md:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/site-photo.jpg')" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/70 to-transparent"
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl bg-white text-ink p-8 md:p-14 shadow-2xl">
          <p className="font-display font-bold text-xs md:text-sm tracking-widest text-brand">
            [ Special ]
          </p>
          <h2 className="mt-3 font-display font-extrabold text-[48px] md:text-[80px] leading-[0.95] tracking-tight text-brand-deep">
            Special
          </h2>
          <p className="mt-3 font-sans font-bold text-base md:text-xl tracking-wide text-ink">
            執行役員メッセージ
          </p>

          <TextReveal className="mt-8 md:mt-10">
            <p className="text-[11px] tracking-widest text-brand font-display font-bold">
              FEATURED MESSAGE
            </p>
            <div className="mt-3 flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-brand-soft flex-none">
                <img
                  src="/高橋.jpg"
                  alt="高橋 博司"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-xl md:text-2xl text-brand-deep leading-tight">
                  高橋 博司
                </h3>
                <p className="text-xs text-sub">執行役員 / 1991 年入社</p>
              </div>
            </div>

            <p className="mt-6 font-sans font-extrabold text-2xl md:text-3xl text-brand leading-snug border-l-4 border-brand pl-4">
              「優しさと思いやり」
            </p>
            <p className="mt-6 text-sm md:text-[15px] text-sub leading-[2]">
              お客様と部下が喜ぶ姿が見られると嬉しい ── 採用で何より大切にするのは
              「思いやり」と「コミュニケーション」。
              素直さを持ち合わせた人を最後まで育てきる文化があります。
              技術は後からでも身につきますが、人柄はその人の芯。
              一緒に働く仲間として、まずは会話から始めさせてください。
            </p>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
