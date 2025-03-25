// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
      },
      fontWeight: {
        thin: 100,
        medium: 500,
        semibold: 600,
      },
      colors: {
        darkGreenStart: '#97ad49',
        darkGreenMiddle: '#93a847',
        darkGreenEnd: '#7a8c38',
        darkGreenDarker: '#6c7d31',
        OffWhite: '#F4F0E0',
        darkerOffWhite: '#F8F9F9',
      },
      boxShadow: {
        'custom-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.7), 0 10px 10px -5px rgba(0, 0, 0, 0.5)',
      },
      fontSize: {
        '6xl': '4rem',
      },
    },
  },
  plugins: [],
};
