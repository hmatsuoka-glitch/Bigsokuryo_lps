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
        // 添付画像から取得した鮮やかなグリーン
        navy: {
          DEFAULT: "#16A34A",
          dark: "#0E7C36",
        },
        brand: {
          DEFAULT: "#16A34A",
          dark: "#0E7C36",
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
