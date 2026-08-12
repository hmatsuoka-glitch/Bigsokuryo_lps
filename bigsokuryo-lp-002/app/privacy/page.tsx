import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "プライバシーポリシー｜ビッグ測量設計株式会社",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-ink py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <p className="font-display font-semibold text-xs md:text-sm tracking-widest text-brand">
            [ Privacy Policy ]
          </p>
          <h1 className="mt-3 font-display font-extrabold text-[40px] md:text-[64px] leading-[0.95] tracking-tight text-brand-deep">
            Privacy
          </h1>
          <p className="mt-3 font-sans font-bold text-base md:text-xl tracking-wide">
            プライバシーポリシー
          </p>

          <div className="mt-10 md:mt-14 space-y-8 text-[15px] text-sub leading-[1.95]">
            <section>
              <h2 className="font-sans font-extrabold text-lg text-brand-deep">
                1. 事業者
              </h2>
              <p className="mt-3">
                ビッグ測量設計株式会社<br />
                〒110-0015 東京都台東区東上野 1-26-8
              </p>
            </section>

            <section>
              <h2 className="font-sans font-extrabold text-lg text-brand-deep">
                2. 取得する個人情報と利用目的
              </h2>
              <p className="mt-3">
                当社は、本サイトおよび公式 LINE アカウントを通じて、
                お名前・連絡先 (LINE ID・電話番号・メールアドレス等)・応募情報などをお預かりする場合があります。
                取得した個人情報は、以下の目的でのみ利用いたします。
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1">
                <li>採用選考および採用活動に関するご連絡</li>
                <li>お問い合わせ・カジュアル面談へのご返信</li>
                <li>その他上記に付随する業務</li>
              </ul>
            </section>

            <section>
              <h2 className="font-sans font-extrabold text-lg text-brand-deep">
                3. 第三者提供
              </h2>
              <p className="mt-3">
                法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="font-sans font-extrabold text-lg text-brand-deep">
                4. 個人情報の管理
              </h2>
              <p className="mt-3">
                取得した個人情報は、不正アクセス・紛失・改ざん等を防止するため、適切に管理いたします。
              </p>
            </section>

            <section>
              <h2 className="font-sans font-extrabold text-lg text-brand-deep">
                5. 開示・訂正・削除のご請求
              </h2>
              <p className="mt-3">
                ご本人からの個人情報の開示・訂正・削除等のご請求には、下記の窓口にて対応いたします。
              </p>
            </section>

            <section>
              <h2 className="font-sans font-extrabold text-lg text-brand-deep">
                6. お問い合わせ窓口
              </h2>
              <p className="mt-3">
                ビッグ測量設計株式会社 採用担当<br />
                〒110-0015 東京都台東区東上野 1-26-8<br />
                {/* TODO (発注者確認): 代表電話番号を追記してください */}
                FAX: 03-3837-5694
              </p>
            </section>

            <p className="text-xs text-sub/70 pt-6 border-t border-black/10">
              制定日: 2026 年 1 月 1 日
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
