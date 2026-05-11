export default function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-white/75">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3">
              <img
                src="/header_logo.png"
                alt="ビッグ測量設計株式会社"
                className="h-9 w-auto bg-white p-1.5"
              />
              <p className="font-sans font-bold text-base text-white leading-tight">
                ビッグ測量設計<br />
                <span className="text-xs text-white/60 font-normal">
                  Big Survey &amp; Design Co., Ltd.
                </span>
              </p>
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              〒110-0015 東京都台東区東上野 1-26-8<br />
              FAX: 03-3837-5694<br />
              営業時間: 8:00 - 17:00 (土日祝定休)
            </p>
            <p className="mt-3 text-xs text-white/50 leading-relaxed">
              測量業者登録 国土交通大臣登録 一般 第 (9)-14858 号
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.4em] text-brand mb-3">
              SITE MAP
            </p>
            <ul className="text-sm space-y-2">
              <li><a href="#business" className="hover:text-brand transition-colors">事業内容</a></li>
              <li><a href="#flow" className="hover:text-brand transition-colors">仕事の流れ</a></li>
              <li><a href="#about" className="hover:text-brand transition-colors">数字で見る</a></li>
              <li><a href="#voice" className="hover:text-brand transition-colors">社員紹介</a></li>
              <li><a href="#recruit" className="hover:text-brand transition-colors">募集要項</a></li>
              <li><a href="#entry" className="hover:text-brand transition-colors">エントリー</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/45">
          <span>© Big Survey &amp; Design Co., Ltd.</span>
          <span className="tracking-widest">SINCE 1980</span>
        </div>
      </div>
    </footer>
  );
}
