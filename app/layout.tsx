import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ビッグ測量株式会社 | 採用サイト",
    template: "%s | ビッグ測量株式会社",
  },
  description:
    "ビッグ測量株式会社の採用情報。地形・境界・公共測量からドローン・3D計測まで、地域インフラを支える総合測量会社で、共に未来をはかる仲間を募集します。",
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
