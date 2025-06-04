/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      circularStdBook: ['CircularStd-Book', 'sans-serif'],
      circularStdMedium: ['CircularStd-Medium', 'sans-serif'],
    },
  },
  plugins: [],
}
