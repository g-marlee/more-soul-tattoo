/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        phone: "url('/images/cardboardbackground.png')",
        desktop: "url('/images/cardboardbackground.png')",
      },
      fontFamily: {
        title: ['"Asul"', "sans-serif"],
        text: ['"Asul"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
