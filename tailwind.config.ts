import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#0c2b4a",
          dark: "#08203a",
        },
        gold: "#c79b3d",
        sand: "#f6f4ee",
      },
    },
  },
  plugins: [],
};

export default config;
