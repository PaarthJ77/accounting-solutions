// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Ensure all component paths are included
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        semibold: 600,
      },
      colors: {
        darkGreenStart: '#97ad49',       // Updated from '#1B4F72' to olive green
        darkGreenMiddle: '#93a847',      // Updated from '#2E86C1' to olive green
        darkGreenEnd: '#7a8c38',         // Updated from '#0D3B66' to olive green
        darkGreenDarker: '#6c7d31',      // Updated from '#0D3B66' to olive green
        OffWhite: '#F4F0E0',
        darkerOffWhite: '#F8F9F9',
      },
      boxShadow: {
        'custom-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.7), 0 10px 10px -5px rgba(0, 0, 0, 0.5)', // Increased shadow
      },
      fontSize: {
        '6xl': '4rem', // Ensure 'text-6xl' exists
      },
    },
  },
  plugins: [],
};
