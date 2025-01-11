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
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttercream: '#FFF4CE',
        coolSilver: '#C0C0C0',
        powderBlue: '#B0E0E6'
      },
      fontFamily: {
        sans: ['sans-serif'],
        serif: ['Georgia'],
        mono: ['ui-monospace'],
        display: ['Playfair Display', 'serif'],
        handwriting: ['Pacifico', 'cursive'],
      },
      backgroundImage: {
        'white-to-yellow': 'linear-gradient(to bottom, white, #FFF4CE)',
      },
    },
  },
  plugins: [],
} satisfies Config;
