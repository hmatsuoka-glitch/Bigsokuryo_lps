import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      colors: {
        // 参考サイト準拠のブランド緑パレット
        brand: {
          DEFAULT: "#00913F", // プライマリ緑
          dark: "#007030", // ロゴ緑 / hover
          deep: "#0B4022", // 深緑（見出し・強調）
          soft: "#E6F4EC", // 淡緑 (背景)
          softer: "#CDE9DA", // 淡緑 (背景 下限)
          outline: "#D4EADF", // マーキー・アウトライン
        },
        navy: {
          DEFAULT: "#0B4022",
          dark: "#082D18",
        },
        line: {
          DEFAULT: "#00913F",
          dark: "#007030",
        },
        ink: "#1A1A1A",
        sub: "#444444",
        sand: "#F6F4EE",
        footer: "#262626",
      },
      backgroundImage: {
        "jobs-grad":
          "linear-gradient(180deg, #FFFFFF 0%, #DFF5E9 30%, #CBE4D6 100%)",
        "entry-grad":
          "linear-gradient(180deg, rgba(0,145,63,0.72) 0%, rgba(11,64,34,0.78) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
