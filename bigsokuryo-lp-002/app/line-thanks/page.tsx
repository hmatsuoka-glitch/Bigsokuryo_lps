import type { Metadata } from "next";
import Script from "next/script";
import LineThanksRedirect from "@/components/LineThanksRedirect";

// TikTok / Meta 広告のコンバージョン計測用の中間ページ。
// 採用LPのLINE追加ボタンからの遷移先で、到達時に TikTok Contact / Meta Lead を
// 発火してから lmasters (LINE管理ツール) へ自動リダイレクトする。
// 検索流入は想定しないため noindex。
export const metadata: Metadata = {
  title: "LINE公式アカウントへ移動します｜ビッグ測量設計株式会社",
  robots: {
    index: false,
    follow: false,
  },
};

// Meta Pixel ベースコードはこの中間ページのみに設置する (LP本体には設置しない)。
const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1743520070187352";

export default function LineThanksPage() {
  return (
    <>
      {META_PIXEL_ID && (
        <Script id="meta-pixel-base" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
      <LineThanksRedirect />
    </>
  );
}
