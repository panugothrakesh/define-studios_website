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
      }
    },
  },
  plugins: [],
};
export default config;
