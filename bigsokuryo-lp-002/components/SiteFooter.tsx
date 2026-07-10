export default function SiteFooter() {
  return (
    <footer className="relative bg-footer text-white/75">
      <p
        aria-hidden
        className="hidden md:block absolute left-4 top-14 bottom-14 [writing-mode:vertical-rl] text-[10px] tracking-[0.4em] text-white/40"
      >
        © Big Survey &amp; Design Co., Ltd.
      </p>

      <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <img
                src="/header_logo.png"
                alt="ビッグ測量設計株式会社"
                className="h-10 w-auto bg-white p-1.5"
              />
              <p className="font-sans font-bold text-base text-white leading-tight">
                ビッグ測量設計<br />
                <span className="font-display text-xs text-white/60 font-semibold tracking-widest">
                  BIG SURVEY &amp; DESIGN
                </span>
              </p>
            </div>
            <p className="mt-6 text-sm leading-[1.9]">
              〒110-0015 東京都台東区東上野 1-26-8<br />
              FAX: 03-3837-5694<br />
              営業時間: 8:00 - 17:00 (土日祝定休)
            </p>
            <p className="mt-3 text-xs text-white/45 leading-relaxed">
              測量業者登録 国土交通大臣登録 一般 第 (9)-14858 号
            </p>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-6">
            <ul className="text-sm space-y-3">
              <li>
                <a href="#about" className="hover:text-brand transition-colors">
                  <span className="block font-display text-[10px] tracking-widest text-white/40">
                    ABOUT
                  </span>
                  会社紹介
                </a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-brand transition-colors">
                  <span className="block font-display text-[10px] tracking-widest text-white/40">
                    JOBS
                  </span>
                  仕事を知る
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-brand transition-colors"
                >
                  <span className="block font-display text-[10px] tracking-widest text-white/40">
                    PROJECTS
                  </span>
                  プロジェクト
                </a>
              </li>
            </ul>
            <ul className="text-sm space-y-3">
              <li>
                <a
                  href="#person"
                  className="hover:text-brand transition-colors"
                >
                  <span className="block font-display text-[10px] tracking-widest text-white/40">
                    PERSON
                  </span>
                  社員紹介
                </a>
              </li>
              <li>
                <a
                  href="#environment"
                  className="hover:text-brand transition-colors"
                >
                  <span className="block font-display text-[10px] tracking-widest text-white/40">
                    ENVIRONMENT
                  </span>
                  働く環境
                </a>
              </li>
              <li>
                <a
                  href="#recruit"
                  className="hover:text-brand transition-colors"
                >
                  <span className="block font-display text-[10px] tracking-widest text-white/40">
                    RECRUIT
                  </span>
                  募集要項
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/45">
          <span className="md:hidden">© Big Survey &amp; Design Co., Ltd.</span>
          <span className="hidden md:block" />
          <span className="font-display tracking-widest">SINCE 1980</span>
        </div>
      </div>
    </footer>
  );
}
