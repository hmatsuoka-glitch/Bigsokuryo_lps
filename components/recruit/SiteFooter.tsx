import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-dark text-white/70 py-14">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-white">
            BIG <span className="text-gold">SOKURYO</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            ビッグ測量株式会社<br />
            〒000-0000 ○○県○○市○○町1-2-3<br />
            TEL: 000-000-0000
          </p>
        </div>
        <div>
          <p className="text-white text-sm tracking-widest mb-3">LPカタログ</p>
          <ul className="text-sm space-y-1.5">
            <li><Link href="/lp-001" className="hover:text-gold">LP-001 新卒採用</Link></li>
            <li><Link href="/lp-002" className="hover:text-gold">LP-002 中途採用</Link></li>
            <li><Link href="/lp-003" className="hover:text-gold">LP-003 U・Iターン</Link></li>
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
        © BIG SOKURYO Co., Ltd.
      </div>
    </footer>
  );
}
