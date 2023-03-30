/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw--",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#005f61",
        secondaryColor: "#857550",
        secondaryLight: "#C6AA76",
        secondaryDark: "#7A6855"
      }
    },
  },
  plugins: [],
}