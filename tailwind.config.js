/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown-coffee': '#4A202A',
        'blush': '#D86487',
        'metallic-pink': '#EEAAC3',
        'pale-pink': '#F1DFDD',
        'claret': '#76172C',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'caveat': ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}