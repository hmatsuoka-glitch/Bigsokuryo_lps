import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        // ビッグ測量設計 ブランドカラー
        // ロゴから抽出したフォレストグリーン
        navy: {
          DEFAULT: "#005A33",
          dark: "#003D22",
        },
        brand: {
          DEFAULT: "#005A33",
          dark: "#003D22",
        },
        // LINE 公式カラー
        line: {
          DEFAULT: "#06C755",
          dark: "#05A647",
        },
        gold: "#C79B3D",
        sand: "#F6F4EE",
      },
    },
  },
  plugins: [],
};

export default config;
