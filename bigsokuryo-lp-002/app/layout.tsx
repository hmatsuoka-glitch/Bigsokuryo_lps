import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title:
    "中途採用 | 鉄道・道路・トンネルを、ミリ単位で測る｜ビッグ測量設計株式会社",
  description:
    "ビッグ測量設計株式会社の経験者・中途採用ページ。1980年創業・社員179名。鉄道・道路・トンネル・空港の重要インフラを支える特許技術と、技術が正しく報われる待遇をご紹介します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="bg-sand text-navy font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
