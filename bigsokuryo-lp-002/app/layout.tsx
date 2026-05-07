import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "中途採用 | 1ミクロンの精度で、東京の動脈を測る。｜ビッグ測量設計株式会社",
  description:
    "ビッグ測量設計株式会社の経験者・中途採用ページ。1980年創業・社員163名。鉄道・道路・トンネル・空港の重要インフラを支える特許技術と、技術が正しく報われる待遇をご紹介します。",
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
