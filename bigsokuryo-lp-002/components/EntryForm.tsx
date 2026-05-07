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
      </div>
    </section>
  );
}
