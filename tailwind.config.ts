import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0, 95)",
        foreground: "var(--foreground)",
        principal: "hsl(248, 89, 68)", 
        secondary: "hsl(252, 100, 88)",
        third: "hsl(269, 49, 90)",
        title: "hsl(0, 0, 80)",
        text: "hsl(0, 0, 0)",
        subtitle: "hsl(0, 0, 0)",
        scrollbar: "hsl(0, 0, 80)",
        stackBg: "hsl(248, 30, 14)",
      },
      fontFamily: {
        sans: ["var(--font-gelasio)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
} satisfies Config;
