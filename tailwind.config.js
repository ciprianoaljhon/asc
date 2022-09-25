/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{.html, .css, .js,}",
"./**/*{.html, .js, .css}",],
  theme: {
    extend: {
      'colors': {
        'dark-300' : 'hsl(10, 0%, 5%)',
        'dark-200' : 'hsl(10, 0%, 7%)',
        'dark-100' : 'hsl(10, 0%, 8%)',
      },
    },
  },
  plugins: [],
}
