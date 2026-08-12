import type { Metadata } from "next";
import { Noto_Sans_JP, Poppins, Caveat } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-script",
  display: "swap",
});

const SITE_URL = "https://big-sokuryo2.sakubuzz.com";
const TITLE =
  "未経験から国家資格 | 人生を変える測量の仕事｜ビッグ測量設計株式会社";
const DESCRIPTION =
  "1980年創業・社員179名のビッグ測量設計。学歴・職歴・経験は問いません。試験費用は会社全額負担で、未経験から測量士・測量士補の国家資格取得をフルサポート。文系・他業種から転身した先輩が多数活躍中です。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "ビッグ測量設計 採用",
    images: [
      {
        url: "/top-img.JPG",
        width: 1200,
        height: 630,
        alt: "ビッグ測量設計 採用",
      },
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/top-img.JPG"],
  },
};

// FIX-18: JobPosting 構造化データ
const jobPostingJsonLd = {
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  title: "測量アシスタント（未経験 OK・正社員）",
  description:
    "1980 年創業・社員 179 名のビッグ測量設計株式会社。未経験歓迎で、測量士・測量士補の試験費用は会社全額負担。文系・他業種からの転身者が多数活躍中です。",
  datePosted: "2026-01-01",
  validThrough: "2027-12-31",
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "ビッグ測量設計株式会社",
    sameAs: SITE_URL,
    logo: `${SITE_URL}/header_logo.png`,
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "東上野 1-26-8",
      addressLocality: "台東区",
      addressRegion: "東京都",
      postalCode: "110-0015",
      addressCountry: "JP",
    },
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "JPY",
    value: {
      "@type": "QuantitativeValue",
      value: 210000,
      unitText: "MONTH",
    },
  },
  industry: "測量業",
  qualifications: "未経験歓迎 / 学歴不問 / 人柄重視",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${poppins.variable} ${caveat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPostingJsonLd),
          }}
        />
      </head>
      <body className="bg-white text-ink font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
