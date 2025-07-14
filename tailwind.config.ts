import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        helvetica: ["HelveticaNeueCyr", "sans-serif"],
      },
      animation: {
        slide: "slide 12s linear infinite", // 12s duration, adjust as needed
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200%)" }, // 4 images * 50% = 200%
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
