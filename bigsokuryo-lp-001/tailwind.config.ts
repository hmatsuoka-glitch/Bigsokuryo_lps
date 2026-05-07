import type { Config } from "tailwindcss";

// ロゴから抽出したコーポレートカラー
//   深いグリーン（メイン） + 赤（アクセント） + ニュートラル
// 既存の `navy` / `gold` ユーティリティ名はそのまま使い、値だけ
// 緑/赤に差し替えることで全コンポーネントを再変更せず色を切替えています。
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Hiragino Sans",
          "Yu Gothic",
          "Noto Sans JP",
          "system-ui",
          "sans-serif",
        ],
        // serif も同じゴシックに統一（文字化け防止）
        serif: [
          "var(--font-sans)",
          "Hiragino Sans",
          "Yu Gothic",
          "Noto Sans JP",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-sans)",
          "Hiragino Sans",
          "Yu Gothic",
          "Noto Sans JP",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        // メイン: ロゴ本体の深いフォレストグリーン
        navy: {
          DEFAULT: "#0f5c2c",
          dark: "#0a4221",
          deep: "#063018",
        },
        // アクセント: ロゴの明るい翼のグリーン（赤は使わない）
        gold: {
          DEFAULT: "#2e8b3d",
          light: "#5fb86b",
          dark: "#1c6128",
        },
        sand: {
          DEFAULT: "#f6f4ee",
          dark: "#ebe6d6",
        },
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(15, 92, 44, 0.18)",
        "soft-lg": "0 20px 60px -20px rgba(15, 92, 44, 0.28)",
        gold: "0 12px 40px -10px rgba(46, 139, 61, 0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
