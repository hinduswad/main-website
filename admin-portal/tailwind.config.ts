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
        orange: {
          50: "hsl(22, 100%, 97.5%)",
          100: "hsl(22, 95%, 93%)",
          200: "hsl(22, 92%, 85%)",
          300: "hsl(22, 90%, 74%)",
          400: "hsl(22, 88%, 62%)",
          500: "hsl(22, 88%, 48%)",
          600: "hsl(22, 92%, 43%)",
          700: "hsl(22, 94%, 36%)",
          800: "hsl(22, 96%, 28%)",
          900: "hsl(22, 98%, 20%)",
          950: "hsl(22, 99%, 12%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
