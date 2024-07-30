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
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        glow: 'glow 2s infinite alternate',
        fadeDown: 'fadeDown 1s ease-in-out',
        fadeUp: 'fadeUp 1s ease-in-out',
        fadeLeft: 'fadeLeft 1s ease-in-out',
        fadeRight: 'fadeRight 1s ease-in-out',
        fadeIn: 'fadeIn 1s ease-in-out'
      }
    }
  },
  plugins: [flowbitePlugin]
}
