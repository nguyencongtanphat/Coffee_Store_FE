/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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