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
      },
      colors: {
        primary: '#007E85'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
    screens: {
      'xl': '1440px',
      'lg': '1024px',
      'md': '776px',
      'sm': '560px',
      'xs': '420px'
    }
  },
  plugins: [],
}
