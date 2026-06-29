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
    "未経験から国家資格 | 人生を変える測量の仕事｜ビッグ測量設計株式会社",
  description:
    "1980年創業・社員179名のビッグ測量設計。学歴・職歴・経験は問いません。試験費用は会社全額負担で、未経験から測量士・測量士補の国家資格取得をフルサポート。文系・他業種から転身した先輩が多数活躍中です。",
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
