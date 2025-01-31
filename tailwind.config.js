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
      backgroundImage: {
        'home-hero' : 'linear-gradient(180deg, #00000055, #255c9955), url("https://res.cloudinary.com/dzfqshhzu/image/upload/v1737663340/heroBg_jlmxlp.jpg")',
      },
      backgroundColor: {
        'grey' : '#eeeeee99',
        'light-grey' : '#dddddd99',
        'blue' : '#255C99',
        'light-blue': '#255c9922',
        'green': '#068D9D',
        'light-green': '#068D9D11',
        'btgreen': '#80DED9',
        'dark': '#333',
      },
      spacing: {
        '50' : '50px',
        '100' : '100px',
        '150' : '150px',
        '200' : '200px',
        '10p' : '10%',
        '15p' : '15%',
        '20p' : '20%',
        '75px' : '75px',
        '100vh' : 'calc( 100vh - 20px )',
      },
      fontSize: {
        'sm' : '12px',
        'base' : '15px',
        'lg' : '17px',
        'xl' : '20px',
        '2xl' : '3vw',
        '25px': '25px',
        '30px': '30px',
        '3xl' : '5vw',
        'mxl' : '12vw',
      },
      lineHeight: {
        '6vw' : '6vw',
      },
      textColor: {
        'green' : '#068D9D',
        'blue' : '#255C99',
        'grey' : '#eeeeee99',

      }
      lineHeight: {
        tighter: 1.1,
      },
      fontFamily: {
        sans: ['var(--font-rosario)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
