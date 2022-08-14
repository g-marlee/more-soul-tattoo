/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				phone: "url('/images/moresoulbackgroundphone.png')",
				desktop: "url('/images/moresoulbackground.png')",
			},
			fontFamily: {
				title: ['"Pirata One"', "cursive"],
				text: ['"Nunito"', "sans-serif"],
			},
		},
	},
	plugins: [require("tailwindcss-textshadow")],
};
