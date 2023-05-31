/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      primary: '#292939',
      secondary: '#f2f2e6',
      tertiary: {
          100: "#fbe1e1",
          200: "#f8c2c2",
          300: "#f4a4a4",
          400: "#f18585",
          500: "#ed6767",
          600: "#be5252",
          700: "#8e3e3e",
          800: "#5f2929",
          900: "#2f1515"
      },
      accent: '#793f5c'
    }
    },
  },
  plugins: [require("daisyui")],
}