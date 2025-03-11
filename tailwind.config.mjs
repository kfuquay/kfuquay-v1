/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        card1: "2px 2px #000000",
        card: "4px 4px #000000",
        hover: "10px 10px #000000",
        transparent: "10px 10px #FFFFFF00",
        pblackHover: "7px 7px #4E6273",
      },
      colors: {
        pblack: "#4E6273",
        white: {
          DEFAULT: "#F2F2F2",
        },
      },
      fontFamily: {
        mono: ["Alexandria", "monospace"],
        sans: ["Alexandria", "sans-serif"],
      },
      maxWidth: {
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "10/12": "91.666667%",
        "12/12": "100%",
      },
      margin: {
        30: "7.3rem",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
      },
      borderColor: {
        black: "#000",
        blackRad: "rgba(0,0,0,0.8)",
        whiteRad: "rgba(242, 242, 242, 0.8)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
