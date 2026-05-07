import Reveal from "./Reveal";

type Props = {
  accentClass?: string;
  category: string;
};

export default function EntryForm({
  accentClass = "bg-navy hover:bg-gold",
  category,
}: Props) {
  return (
    <section
      id="entry"
      className="py-28 bg-gradient-to-b from-sand/40 to-white relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl"
      />
      <div className="relative max-w-3xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.4em] text-gold">ENTRY</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            {category}エントリー
          </h2>
          <p className="mt-5 text-sm md:text-base text-navy/70 max-w-lg mx-auto">
            ご質問・カジュアル面談のみのお問い合わせも歓迎です。
            人事部 須藤宛 (saiyou@bigsdc.co.jp) に直接ご連絡いただいても構いません。
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form className="mt-12 grid gap-6">
            <label className="block group">
              <span className="text-xs tracking-widest text-navy/70 group-focus-within:text-gold transition-colors">
                お名前
              </span>
              <input
                type="text"
                required
                className="mt-2 w-full border-b-2 border-navy/20 bg-transparent py-2.5 focus:border-gold outline-none transition-colors"
              />
            </label>
            <label className="block group">
              <span className="text-xs tracking-widest text-navy/70 group-focus-within:text-gold transition-colors">
                メールアドレス
              </span>
              <input
                type="email"
                required
                className="mt-2 w-full border-b-2 border-navy/20 bg-transparent py-2.5 focus:border-gold outline-none transition-colors"
              />
            </label>
            <label className="block group">
              <span className="text-xs tracking-widest text-navy/70 group-focus-within:text-gold transition-colors">
                ご質問・志望動機 (任意)
              </span>
              <textarea
                rows={4}
                className="mt-2 w-full border-b-2 border-navy/20 bg-transparent py-2.5 focus:border-gold outline-none resize-none transition-colors"
              />
            </label>
            <button
              type="submit"
              className={`cta-shine mt-6 ${accentClass} text-white py-4 rounded-full text-sm tracking-[0.25em] font-bold transition-all hover:shadow-lg hover:-translate-y-0.5`}
            >
              送信する →
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
