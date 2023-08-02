/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

const colors = {
  border: '#dce1e6',
  'input-border': '#0000001f',
  'input-border2': '#00000045',
  text: '#304156',
  gray: '#828D99',
  red: '#D3153D',
  green: '#50dc6c',
  primary: '#447bba',
  yellow: '#FBAB14',
  pink: '#ee2c8d',
  bg: '#edeef0',
  dark: '#222a32',
  black: '#000',
  white: '#fff',
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors,
    },
    screens: {
      m320: '320px',
      m375: '375px',
      m475: '475px',
      m492: '492px',
      m576: '576px',
      m595: '595px',
      xl1400: '1400px',
      menu: '1280px',
      pagination730: '730px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
    lineClamp: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/line-clamp')],
  corePlugins: {
    container: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
