import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "採用情報 | 思いやりを、技術にのせて。｜ビッグ測量設計株式会社",
  description:
    "東京・上野で1980年創業。鉄道・空港・トンネル・道路の工事測量と1ミクロン精度の特許技術を支える、ビッグ測量設計の採用LP。新卒・中途採用情報を掲載しています。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="bg-sand text-navy">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
