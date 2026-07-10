const NAV = [
  { en: "About us", ja: "会社紹介", href: "#about" },
  { en: "Jobs", ja: "仕事を知る", href: "#jobs" },
  { en: "Projects", ja: "プロジェクト", href: "#projects" },
  { en: "Person", ja: "社員紹介", href: "#person" },
  { en: "Environment", ja: "働く環境", href: "#environment" },
  { en: "Recruit info", ja: "募集要項", href: "#recruit" },
];

export default function SiteFooter() {
  return (
    <>
      <a
        href="#top"
        className="block bg-brand hover:bg-brand-dark text-white text-center py-4 transition-colors"
      >
        <span
          aria-hidden
          className="inline-block mr-2 translate-y-0.5"
        >
          ↑
        </span>
        <span className="font-display font-bold text-xs md:text-sm tracking-[0.3em]">
          PAGE TOP
        </span>
      </a>

      <footer className="relative bg-footer text-white/75">
        <p
          aria-hidden
          className="hidden md:block absolute left-4 top-14 bottom-14 [writing-mode:vertical-rl] text-[10px] tracking-[0.4em] text-white/40"
        >
          © Big Survey &amp; Design Co., Ltd.
        </p>

        <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12 md:py-20">
          <div className="text-center md:text-left md:grid md:grid-cols-12 md:gap-10 items-start">
            <div className="md:col-span-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
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
            </div>

            <div className="mt-10 md:mt-0 md:col-span-6">
              <ul className="divide-y divide-white/10 border-y border-white/10 md:border-0 md:divide-y-0 md:grid md:grid-cols-2 md:gap-4">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="flex items-baseline justify-between md:justify-start md:gap-4 py-4 md:py-2 hover:text-brand transition-colors"
                    >
                      <span className="font-display font-bold text-base tracking-tight">
                        {n.en}
                      </span>
                      <span className="text-xs text-white/55 tracking-wider">
                        {n.ja}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 md:mt-14 text-center md:text-left text-[12px] leading-[1.9] text-white/55">
            〒110-0015 東京都台東区東上野 1-26-8<br />
            FAX: 03-3837-5694 / 営業時間: 8:00 - 17:00 (土日祝定休)<br />
            測量業者登録 国土交通大臣登録 一般 第 (9)-14858 号
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-white/45">
            <span>© Big Survey &amp; Design Co., Ltd.</span>
            <span className="font-display tracking-widest">SINCE 1980</span>
          </div>
        </div>
      </footer>
    </>
  );
}
