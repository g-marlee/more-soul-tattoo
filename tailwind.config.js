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
        title: ['"Asul"', "sans-serif"],
        text: ['"IBM Plex Serif"', "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
