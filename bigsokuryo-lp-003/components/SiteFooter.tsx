export default function SiteFooter() {
  return (
    <footer className="bg-navy-dark text-white/70 py-14">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-white">
            BIG <span className="text-gold">SOKURYO</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            ビッグ測量設計株式会社<br />
            〒110-0015 東京都台東区東上野1-26-8<br />
            TEL: 03-3837-0291 / FAX: 03-3837-5694
          </p>
          <p className="mt-3 text-xs text-white/50 leading-relaxed">
            国土交通大臣登録 一般 第（９）-14858号<br />
            創業 1980年10月29日／資本金 1,000万円
          </p>
        </div>
        <div>
          <p className="text-white text-sm tracking-widest mb-3">採用情報</p>
          <ul className="text-sm space-y-1.5">
            <li>新卒採用（2027年卒）</li>
            <li>中途採用（経験者・既卒）</li>
            <li>人柄採用（文系・未経験歓迎）</li>
          </ul>
        </div>
        <div>
          <p className="text-white text-sm tracking-widest mb-3">採用窓口</p>
          <p className="text-sm leading-relaxed">
            人事部 須藤 翠<br />
            <a
              href="mailto:saiyou@bigsdc.co.jp"
              className="hover:text-gold transition"
            >
              saiyou@bigsdc.co.jp
            </a>
          </p>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-white/40">
        © Big Survey &amp; Design Co., Ltd.
      </div>
    </footer>
  );
}
