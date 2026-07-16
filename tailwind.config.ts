import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Inter Tight'", "system-ui", "sans-serif"],
      display: ["'Fraunces'", "Georgia", "serif"],
    },
  },
  plugins: [],
} satisfies Config;
