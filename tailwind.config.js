/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
        3: '3px',
      },
      scale: {
        98: '0.98',
        102: '1.02',
        115: '1.15',
        120: '1.20',
      },
      blur: {
        xxxs: '1px',
        xxs: '2px',
        xs: '3px',
      },
      brightness: {
        25: '.25',
        85: '.85',
        65: '.65',
        115: '1.15',
        135: '1.35',
      },
      fontSize: {
        sm: '1rem',
        base: '1.1rem',
        md: '1.23rem',
        lg: '1.33rem',
        xl: '1.45rem',
        '2xl': '1.6rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.2rem',
        '6xl': '4rem',
        '7xl': '4.6rem',
      },
      borderRadius: {
        '4xl': '40px',
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '5/4': '5/4',
      },
      screens: {
        '3xl': '1800px',
      },
      maxWidth: {
        '8xl': '1700px',
      },
      strokeWidth: {
        3: '3px',
      },
      borderRadius: {
        '4xl': '40px',
        '5xl': '50px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        // garden: {
        //   ...require('daisyui/src/theming/themes')['garden'],
        //   primary: '#66a182',
        //   'base-100': '#e1e1e1',
        //   'base-200': '#e8e8e8',
        //   'base-300': '#f6f6f6',
        //   secondary: '#424138',
        //   accent: '#3d42a9',
        //   'base-content': '#818177',
        //   error: '#602b1f',
        //   success: '#2d8364',
        // },
        black: {
          ...require('daisyui/src/theming/themes')['black'],
          primary: '#66a182',
          'base-100': '#050505',
          'base-200': '#0b0c0d',
          'base-300': '#101213',
          //   secondary: '#424138',
          accent: '#384d48',
          'base-content': '#bbb',
          //   error: '#602b1f',
          //   success: '#2d8364',
        },
      },
    ],
  },
};
