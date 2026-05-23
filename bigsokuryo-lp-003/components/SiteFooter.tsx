export default function SiteFooter() {
  return (
    <footer className="relative bg-navy-dark text-white/75 py-16 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -right-20 w-[400px] h-[400px] rounded-full bg-emerald-700/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-emerald-900/20 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-white font-bold">
            BIG <span className="text-emerald-400">SOKURYO</span>
          </p>
          <p className="mt-4 text-sm leading-[1.9]">
            ビッグ測量設計株式会社<br />
            〒110-0015 東京都台東区東上野1-26-8<br />
            TEL: 03-3837-0291 / FAX: 03-3837-5694
          </p>
          <p className="mt-4 text-xs text-white/45 leading-[1.85]">
            国土交通大臣登録 一般 第（９）-14858号<br />
            創業 1980年10月29日／資本金 1,000万円
          </p>
        </div>
        <div>
          <p className="text-emerald-400 text-xs tracking-[0.3em] mb-4 font-bold">
            RECRUIT
          </p>
          <ul className="text-sm space-y-2.5">
            <li className="hover:text-emerald-300 transition-colors cursor-pointer">
              新卒採用（2027年卒）
            </li>
            <li className="hover:text-emerald-300 transition-colors cursor-pointer">
              中途採用（経験者・既卒）
            </li>
            <li className="hover:text-emerald-300 transition-colors cursor-pointer">
              人柄採用（文系・未経験歓迎）
            </li>
          </ul>
        </div>
        <div>
          <p className="text-emerald-400 text-xs tracking-[0.3em] mb-4 font-bold">
            CONTACT
          </p>
          <p className="text-sm leading-[1.9]">
            人事部 須藤 翠<br />
            <a
              href="mailto:saiyou@bigsdc.co.jp"
              className="text-emerald-300 hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              saiyou@bigsdc.co.jp
            </a>
          </p>
        </div>
      </div>
      <div className="relative mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/40">
        © Big Survey &amp; Design Co., Ltd.
      </div>
    </footer>
  );
}
