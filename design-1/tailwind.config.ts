import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fire:"var(--yellow-color)",
        skyPink:"var(--pink-color)"
      },
      fontFamily: {
        primary:"var(--primary-font)"
      }
    },
  },
  plugins: [],
} satisfies Config;