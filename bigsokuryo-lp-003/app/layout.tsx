import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "U・Iターン採用 | 測量と暮らしが、ちょうどいい。｜ビッグ測量株式会社",
  description:
    "ビッグ測量株式会社のU・Iターン採用ページ。移住バディ制度や住宅・引越支援、地方暮らしの実感をご紹介します。",
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
