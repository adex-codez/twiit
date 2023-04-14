/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#192244",
        // secondary: "#38bdf8",
        primary: '#292939',
        primary2: '#f2f2e6',
        secondary: '#ed6767',
        accent: '#793f5c'
      },
      fontFamily: {
        body: 'Nunito'
      }
    },
  },
  plugins: [],
}