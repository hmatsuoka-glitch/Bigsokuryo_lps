export default function SiteFooter() {
  return (
    <footer className="bg-navy-dark text-white/70 py-14">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-sans font-bold text-xl text-white">
            BIG <span className="text-gold">SOKURYO</span> &amp; DESIGN
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            ビッグ測量設計株式会社<br />
            〒110-0015 東京都台東区東上野 1-26-8<br />
            TEL: 03-3837-0291 / FAX: 03-3837-5694<br />
            営業時間: 8:00 - 17:00 (土日祝定休)
          </p>
          <p className="mt-3 text-xs text-white/50 leading-relaxed">
            測量業者登録 国土交通大臣登録 一般 第 (9)-14858 号
          </p>
        </div>
        <div>
          <p className="text-white text-sm tracking-widest mb-3">採用情報</p>
          <ul className="text-sm space-y-1.5">
            <li>新卒採用</li>
            <li>中途採用</li>
            <li>U・Iターン採用</li>
          </ul>
        </div>
        <div>
          <p className="text-white text-sm tracking-widest mb-3">企業情報</p>
          <ul className="text-sm space-y-1.5">
            <li>会社概要</li>
            <li>事業案内</li>
            <li>プライバシーポリシー</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-white/40">
        © Big Survey &amp; Design Co., Ltd.
      </div>
    </footer>
  );
}
