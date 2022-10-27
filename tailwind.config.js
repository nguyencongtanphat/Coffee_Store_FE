/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize:{
      h1: ['40px','bold'],
      h2: ['32px','bold'],
      h3: ['30px','bold'],
      b1: ['40px','bold'],
      b2: ['40px','regular'],
      b3: ['32px','bold'],
      b4: ['32px','regular'],
      b5: ['24px','bold'],
      b6: ['24px','regular'],
      b7: ['18px','bold'],
      b8: ['18px','regular'],
      b9: ['18px','regular'],
      b10: ['14px','bold'],
      b11: ['14px','regular'],
      b12: ['12px','bold'],
      b13: ['12px','regular'],
    },
    fontFamily:{
      MsMadi: ['MsMadi'],
      Lexend: ['Lexend']
    },
    extend: {
      colors: {
        brown: "#9D5C0D",
        orange: "#E5890A",
        beige: "#F7D08A",
        beige100: "#FFEFD3",
        white: "#FAFAFA",
        grey: "#E3E3E3",
        grey100: "#4F4F4F",
        grey200: "#828282",
        grey300: "#BDBDBD",
        grey400: "#E0E0E0",
        black: "#333333",
      },
    },
  },
  plugins: [],
};