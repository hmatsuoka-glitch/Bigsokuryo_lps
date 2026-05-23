import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "人柄採用 | 思いやりを、技術にのせて。｜ビッグ測量設計株式会社",
  description:
    "1980年創業、東京・上野で45年。文系・未経験から測量を始めた仲間が活躍するビッグ測量設計の人柄重視採用。有給取得率79.9%、健康企業宣言「銀の認定」、社員寮3万円/月、資格手当最大10万円。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJp.variable}>
      <body className="bg-sand text-navy">{children}</body>
    </html>
  );
}
