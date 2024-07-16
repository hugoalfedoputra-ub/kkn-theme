/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    fontFamily: {
      primary: ['Raleway', 'sans-serif'],
      secondary: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'green-primary': '#004F2D',
        'yellow-primary': '#EDAE49',
        'white-secondary': '#EAECEF',
        'red-statistic': '#ED5349',
        'green-statistic': '#49ED59',
        'blue-statistic': '#49A8ED'
      }
    }
  },
  plugins: []
}
