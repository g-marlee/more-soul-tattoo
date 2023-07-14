/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        phone: "url('/images/cardboardbackground.png')",
        desktop: "url('/images/homepage2.jpeg')",
      },
      fontFamily: {
        title: ['"Pirata One"', "sans-serif"],
        text: ['"Carrois Gothic SC"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
