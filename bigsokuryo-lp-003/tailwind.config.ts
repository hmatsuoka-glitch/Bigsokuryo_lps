import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-noto-sans-jp)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#1d6e3a",
          dark: "#114a23",
          light: "#e8f1ea",
        },
        accent: {
          DEFAULT: "#c8202e",
          dark: "#9a1622",
        },
        navy: {
          DEFAULT: "#1a1a1a",
          dark: "#0a0a0a",
        },
        gold: "#c8202e",
        sand: "#f4efe5",
        emerald: {
          50: "#eef5f0",
          100: "#dcebe0",
          200: "#b8d6c0",
          300: "#8dbb98",
          400: "#5a9a6a",
          500: "#2f7e44",
          600: "#256536",
          700: "#1d6e3a",
          800: "#155429",
          900: "#0d4221",
          950: "#062513",
        },
        teal: {
          400: "#3fa07a",
          500: "#2a8264",
          600: "#1f6a52",
          700: "#155441",
          800: "#0d3e30",
        },
        amber: {
          50: "#fff7ed",
          100: "#fdecd3",
          200: "#fad8a6",
          300: "#f5be75",
          400: "#ec9d44",
          500: "#d97a25",
          600: "#b75e1c",
          700: "#8d4615",
        },
        sky: {
          50: "#eef5f0",
          100: "#dcebe0",
          200: "#b8d6c0",
          300: "#8dbb98",
          400: "#5a9a6a",
          500: "#2f7e44",
          600: "#256536",
          700: "#1d6e3a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
