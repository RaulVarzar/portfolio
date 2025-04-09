/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        3: "3px",
      },
      scale: {
        98: "0.98",
        102: "1.02",
        115: "1.15",
        120: "1.20",
      },
      blur: {
        xxxs: "1px",
        xxs: "2px",
        xs: "3px",
      },
      brightness: {
        25: ".25",
        85: ".85",
        65: ".65",
        115: "1.15",
        135: "1.35",
      },
      fontSize: {
        sm: "1rem",
        base: "1.1rem",
        md: "1.23rem",
        lg: "1.33rem",
        xl: "1.45rem",
        "2xl": "1.6rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.2rem",
        "6xl": "4rem",
        "7xl": "4.6rem",
        xxl: "10rem",
      },
      borderRadius: {
        "4xl": "40px",
      },
      aspectRatio: {
        "4/5": "4 / 5",
        "5/4": "5/4",
      },
      screens: {
        "3xl": "1800px",
      },
      maxWidth: {
        "8xl": "1700px",
      },
      strokeWidth: {
        3: "3px",
      },
      borderRadius: {
        "4xl": "40px",
        "5xl": "50px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        black: {
          ...require("daisyui/src/theming/themes")["black"],
          accent: "#2a275d",
          primary: "#511ab7",
          secondary: "#4c39ac",
          "base-100": "#0c0c0d",
          "base-200": "#0f0f0f",
          "base-300": "#161616",

          // accent: "#311d6d",
          // accent: "#1c3738",
          error: "#8d0801",
          "neutral-content": "#c4c3d5",
          "base-content": "#aaaab1",
          //   error: '#602b1f',
          //   success: '#2d8364',
        },
      },
    ],
  },
};
