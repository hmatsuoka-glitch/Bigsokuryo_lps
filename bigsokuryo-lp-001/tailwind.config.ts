import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#0c2b4a",
          dark: "#08203a",
          deep: "#040f1f",
        },
        gold: {
          DEFAULT: "#c79b3d",
          light: "#e0bb5e",
          dark: "#a17d28",
        },
        sand: {
          DEFAULT: "#f6f4ee",
          dark: "#ebe6d6",
        },
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(12,43,74,0.15)",
        "soft-lg": "0 20px 60px -20px rgba(12,43,74,0.25)",
        gold: "0 12px 40px -10px rgba(199,155,61,0.45)",
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
