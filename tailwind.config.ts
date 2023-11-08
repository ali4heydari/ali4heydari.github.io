import hocus from "tailwindcss-hocus";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss/types/config";

const tailwindConfig: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  plugins: [typography, hocus],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(1.5rem)" },
          "100%": { transform: "translateX(-100%)" },
        },
        wave: {
          "from, 50%, to": { transform: "rotate(0deg)" },
          "10%, 30%": { transform: "rotate(-10deg)" },
          "20%": { transform: "rotate(12deg)" },
          "40%": { transform: "rotate(9deg)" },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
        wave: "wave 2.5s infinite",
      },
    },
  },
};

export default tailwindConfig;
