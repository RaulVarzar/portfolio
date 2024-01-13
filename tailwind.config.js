/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        102: '1.02',
      },
      blur: {
        xs: '3px',
      },
      brightness: {
        85: '.85',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1.1rem',
        md: '1.55rem',
        lg: '1.18rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '4rem',
        '7xl': '4.6rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['sunset'],
  },
};
