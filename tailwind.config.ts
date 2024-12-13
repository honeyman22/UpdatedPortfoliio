import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAF9F6",
        secondary: "#EDE8E0",
        accent: "#D0B8A0",
        highlight: "#003366",
        primaryBRT: "#1E2B43",
        secondaryBRT: "#e0b51b",
        primaryJKB: "#1A2745",
        secondaryJKB: "#d94c9c",
        primaryCTWR: "#322B37",
        secondaryCTWR: "#e6ab91",
        primaryKNY: "",
        secondaryKNY: "#e6ab91",
        primarySPR: "",
        secondarySPR: "#e6ab91",
        primaryKTHG: "",
        secondaryKTHG: "#e6ab91",
        primaryLUML: "",
        secondaryLUML: "#e6ab91",
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        pop: "pop 3s ease-in-out infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        pop: {
          "0%, 100%": { transform: "scale(1.2)", opacity: "0.8" },
          "50%": { transform: "scale(1)", opacity: "1" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
