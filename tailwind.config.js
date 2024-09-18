/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['"./src/**/*.{html,js}"'],
  darkMode: `selector`, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato'],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "4-5xl": "2.625rem",
      "5xl": "3rem",
      "5-5xl": "3.875rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        "light-theme": "#ffffff",
        "dark-theme": "#222222F5",
      },
      margin: {
        "-112": "-28rem",
        "-120": "-30rem",
        "-128": "-32rem",
        "-144": "-36rem",
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-15px)' },
          '60%': { transform: 'translateY(-7px)' },
        },
      },
      spacing: {
        71: "17.75rem",
        95: "23.5rem",
        192: "48rem",
        192.5: "49.5rem",
        193: "51rem",
        110: "110rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
