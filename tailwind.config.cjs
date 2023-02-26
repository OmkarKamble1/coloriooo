/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ['Pacifico'],
        Kanit: ['Kanit'],
        VarelaRound: ['Varela Round'],
      },
    },
  },
  plugins: [],
};
