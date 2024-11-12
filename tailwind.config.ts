import hocus from "tailwindcss-hocus";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss/types/config";

const tailwindConfig: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  plugins: [typography, hocus],
  theme: {
    extend: {
      animation: {
        grid: "grid 15s linear infinite",
        scroll: "scroll 15s linear infinite",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        spin: "spin calc(var(--speed) * 2) infinite linear",
        wave: "wave 2.5s infinite",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        scroll: {
          "0%": { transform: "translateX(1.5rem)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        spin: {
          "0%": {
            rotate: "0deg",
          },
          "100%": {
            rotate: "360deg",
          },
          "15%, 35%": {
            rotate: "90deg",
          },
          "65%, 85%": {
            rotate: "270deg",
          },
        },
        wave: {
          "10%, 30%": { transform: "rotate(-10deg)" },
          "20%": { transform: "rotate(12deg)" },
          "40%": { transform: "rotate(9deg)" },
          "from, 50%, to": { transform: "rotate(0deg)" },
        },
      },
    },
  },
};

export default tailwindConfig;
