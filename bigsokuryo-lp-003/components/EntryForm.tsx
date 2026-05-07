type Props = {
  accentClass?: string;
  category: string;
};

export default function EntryForm({
  accentClass = "bg-navy hover:bg-gold",
  category,
}: Props) {
  return (
    <section id="entry" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] text-gold text-center">ENTRY</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy text-center">
          {category}エントリー
        </h2>
        <p className="mt-4 text-sm text-navy/70 text-center">
          ご質問・カジュアル面談のみのお問い合わせも歓迎です。
        </p>

        <form className="mt-12 grid gap-5">
          <label className="block">
            <span className="text-xs tracking-widest text-navy/70">お名前</span>
            <input
              type="text"
              required
              className="mt-1 w-full border-b border-navy/30 bg-transparent py-2 focus:border-gold outline-none"
            />
          </label>
          <label className="block">
            <span className="text-xs tracking-widest text-navy/70">
              メールアドレス
            </span>
            <input
              type="email"
              required
              className="mt-1 w-full border-b border-navy/30 bg-transparent py-2 focus:border-gold outline-none"
            />
          </label>
          <label className="block">
            <span className="text-xs tracking-widest text-navy/70">
              ご質問・志望動機（任意）
            </span>
            <textarea
              rows={4}
              className="mt-1 w-full border-b border-navy/30 bg-transparent py-2 focus:border-gold outline-none resize-none"
            />
          </label>
          <button
            type="submit"
            className={`mt-6 ${accentClass} text-white py-4 rounded-full text-sm tracking-widest transition`}
          >
            送信する
          </button>
        </form>

        <div className="mt-10 rounded-xl bg-emerald-50 border border-emerald-700/15 p-6 text-sm text-navy/80 leading-relaxed">
          <p className="font-bold text-navy mb-2">直接の連絡を希望される方へ</p>
          <p>
            人事部 須藤 翠｜
            <a
              href="mailto:saiyou@bigsdc.co.jp"
              className="text-emerald-700 hover:underline"
            >
              saiyou@bigsdc.co.jp
            </a>
          </p>
          <p className="mt-3 text-xs text-navy/60">
            ※ 当社は採用選考におけるハラスメントを固く禁じています。
            選考の過程で気になることがあれば上記窓口にご連絡ください。
          </p>
        </div>
      </div>
    </section>
  );
}
