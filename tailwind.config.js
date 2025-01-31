const tokens = require('@contentful/f36-tokens');
const { fontFamily } = require('tailwindcss/defaultTheme');

const colors = Object.entries(tokens).reduce((acc, [key, value]) => {
  // Filter Hex colors from the f36-tokens
  if (/^#[0-9A-F]{6}$/i.test(value)) {
    acc[key] = value;
  }

  return acc;
}, {});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    extend: {
      
      lineHeight: {
        '6vw' : '6vw',
        'tighter': '1.1',
      },
      textColor: {
        'green' : '#068D9D',
        'blue' : '#255C99',
        'grey' : '#eeeeee99',
      },
      fontFamily: {
        sans: ['var(--font-rosario)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
