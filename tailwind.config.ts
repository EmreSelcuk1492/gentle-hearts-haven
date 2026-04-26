import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Jost'", "system-ui", "sans-serif"],
      display: ["'Cormorant Garamond'", "Georgia", "serif"],
    },
  },
  plugins: [],
} satisfies Config;
