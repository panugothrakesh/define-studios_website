import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ebgaramond: ["var(--font-ebgaramond)"],
        ponjoung: ["var(--font-ponjoung)"],
        haboro: ["var(--font-haboro)"],
      },
      
      animation: {
        'bg-position': 'bgPosition 4s ease-in-out infinite',
      },
      keyframes: {
        bgPosition: {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '100%' },
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #000, #A9A9A9, #000)',
      },
    },
  },
  plugins: [],
};
export default config;
