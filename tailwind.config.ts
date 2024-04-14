/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "custom": ["Source Sans Pro"]
      },
      colors: {
        white: '#fff',
        primary: '#3E49B9',
        second: '#232434',
        darkblue: '#212752',
        blue_rgb: 'rgba(62, 73, 185, 0.60)'
      }
    },
  },
  plugins: [],
}
