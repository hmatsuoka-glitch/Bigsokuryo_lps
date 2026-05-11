import Reveal from "./Reveal";
import { LineButton } from "./LineButton";

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
          <p className="mt-5 text-sm md:text-base text-black/70 leading-relaxed">
            {category}採用へのご応募・ご質問はこちらから。
            カジュアル面談のみのお問い合わせも歓迎です。
            公式 LINE・メール・フォームの 3 つからお選びください。
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 md:mt-14">
          <div className="bg-white border border-navy/10 p-6 md:p-8">
            <div className="flex items-baseline justify-between flex-wrap gap-3 pb-5 mb-5 border-b border-navy/10">
              <p className="text-xs tracking-[0.4em] text-gold">QUICK CONTACT</p>
              <p className="text-[11px] text-black/55">最短ルートで応募する</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <LineButton size="lg" className="w-full" />
              <a
                href="mailto:saiyou@bigsdc.co.jp"
                className="inline-flex items-center justify-center gap-2 border border-brand text-brand hover:bg-brand hover:text-white font-bold text-sm md:text-base tracking-wider px-6 py-4 rounded-full transition-colors"
              >
                メールで応募する
                <span aria-hidden>→</span>
              </a>
            </div>
            <p className="mt-3 text-[11px] text-black/55 text-center">
              ※ LINE は匿名でのご相談も可能です
            </p>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8 md:mt-10">
          <div className="flex items-center gap-4 mb-6">
            <span aria-hidden className="h-px flex-1 bg-navy/15" />
            <span className="text-[10px] tracking-[0.4em] text-black/45">
              OR FORM
            </span>
            <span aria-hidden className="h-px flex-1 bg-navy/15" />
          </div>
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
              className={`mt-2 ${accentClass} text-white py-4 text-sm tracking-[0.25em] font-bold transition-all hover:shadow-lg`}
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
      <span className="flex items-center gap-2 text-xs tracking-widest text-black/70 mb-2">
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
