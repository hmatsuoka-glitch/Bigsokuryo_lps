import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "中途採用 | あなたの技術が、地域の標準になる。｜ビッグ測量株式会社",
  description:
    "ビッグ測量株式会社の経験者・中途採用ページ。最新の3D計測機器、評価される技術文化、3つのキャリアトラックをご紹介します。",
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
