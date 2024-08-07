import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors:{
      primary:"#FAF9F6",
      secondary:"#EDE8E0",
      accent:"#D0B8A0",
      highlight:"#003366"
    }, boxShadow: {
      custom: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    },
  },
  plugins: [],
};
export default config;
