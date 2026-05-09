import Reveal from "./Reveal";

type Props = {
  accentClass?: string;
  category: string;
};

export default function EntryForm({
  accentClass = "bg-brand hover:bg-brand-dark",
  category,
}: Props) {
  return (
    <section id="entry" className="py-20 md:py-28 bg-sand/40">
      <div className="relative max-w-3xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold">APPLY</p>
          <h2 className="mt-3 font-sans font-bold text-3xl md:text-5xl text-navy leading-tight">
            エントリー
          </h2>
          <p className="mt-5 text-sm md:text-base text-navy/70 leading-relaxed">
            {category}採用へのご応募・ご質問はこちらから。
            カジュアル面談のみのお問い合わせも歓迎です。
            人事部 須藤宛 (saiyou@bigsdc.co.jp) に直接ご連絡いただいても構いません。
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10 md:mt-14">
          <form className="bg-white border border-navy/10 p-6 md:p-10 grid gap-6">
            <Field label="お名前" required>
              <input
                type="text"
                required
                className="w-full border border-navy/20 bg-white px-4 py-3 text-sm md:text-base focus:border-brand outline-none transition-colors"
              />
            </Field>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="メールアドレス" required>
                <input
                  type="email"
                  required
                  className="w-full border border-navy/20 bg-white px-4 py-3 text-sm md:text-base focus:border-brand outline-none transition-colors"
                />
              </Field>
              <Field label="電話番号">
                <input
                  type="tel"
                  className="w-full border border-navy/20 bg-white px-4 py-3 text-sm md:text-base focus:border-brand outline-none transition-colors"
                />
              </Field>
            </div>
            <Field label="ご質問・志望動機">
              <textarea
                rows={5}
                className="w-full border border-navy/20 bg-white px-4 py-3 text-sm md:text-base focus:border-brand outline-none resize-none transition-colors"
              />
            </Field>
            <button
              type="submit"
              className={`cta-shine mt-2 ${accentClass} text-white py-4 text-sm tracking-[0.25em] font-bold transition-all hover:shadow-lg`}
            >
              送信する →
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-xs tracking-widest text-navy/70 mb-2">
        {label}
        {required && (
          <span className="text-[10px] bg-brand text-white px-1.5 py-0.5 tracking-normal">
            必須
          </span>
        )}
      </span>
      {children}
    </label>
  );
}
