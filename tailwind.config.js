import flowbitePlugin from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      primary: ['Raleway', 'sans-serif'],
      secondary: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'green-primary': '#004F2D',
        'yellow-primary': '#EDAE49',
        'white-secondary': '#EAECEF'
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            filter:
              'drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #fff) drop-shadow(0 0 15px #fff) drop-shadow(0 0 20px #fff) drop-shadow(0 0 30px #fff) drop-shadow(0 0 40px #fff)'
          },
          '50%': {
            filter:
              'drop-shadow(0 0 10px #fff) drop-shadow(0 0 20px #fff) drop-shadow(0 0 30px #fff) drop-shadow(0 0 40px #fff) drop-shadow(0 0 50px #fff) drop-shadow(0 0 60px #fff)'
          }
        }
      },
      animation: {
        glow: 'glow 2s infinite alternate'
      }
    }
  },
  plugins: [flowbitePlugin]
}
