
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './styles/**/*.css',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
