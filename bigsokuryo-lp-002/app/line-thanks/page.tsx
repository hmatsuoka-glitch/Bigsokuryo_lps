import type { Metadata } from "next";
import LineThanksRedirect from "@/components/LineThanksRedirect";

// TikTok 広告のコンバージョン計測用の中間ページ。
// 採用LPのLINE追加ボタンからの遷移先で、到達時に Contact を発火してから
// lmasters (LINE管理ツール) へ自動リダイレクトする。検索流入は想定しないため noindex。
export const metadata: Metadata = {
  title: "LINE公式アカウントへ移動します｜ビッグ測量設計株式会社",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LineThanksPage() {
  return <LineThanksRedirect />;
}
