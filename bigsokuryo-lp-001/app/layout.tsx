import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "新卒採用 | 地図に、自分の名前を残す。｜ビッグ測量株式会社",
  description:
    "ビッグ測量株式会社の新卒・第二新卒採用ページ。未経験からスタートできる育成制度と、若手が活躍する現場をご紹介します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-sand text-navy">{children}</body>
    </html>
  );
}
