/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend Tera', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
