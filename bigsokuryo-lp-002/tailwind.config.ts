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
        // ロゴのフォレストグリーンを基調に
        navy: {
          DEFAULT: "#0F5132",
          dark: "#073A22",
        },
        brand: {
          DEFAULT: "#0F5132",
          dark: "#073A22",
        },
        // 補色アクセント (深緑と相性のいい温かみのあるゴールド)
        gold: "#C79B3D",
        // ベース背景
        sand: "#F6F4EE",
      },
    },
  },
  plugins: [],
};

export default config;
