/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
          600: '#333333',
          700: '#666666',
          800: '#999999',
          900: '#cccccc'
        },
        oxford_blue: {
          DEFAULT: '#14213d',
          600: '#29447e',
          700: '#3e67bf',
          800: '#7e99d5',
          900: '#beccea'
        },
        orange_web: {
          DEFAULT: '#fca311',
          600: '#fdb541',
          700: '#fec871',
          800: '#fedaa0',
          900: '#ffedd0'
        },
        platinum: {
          DEFAULT: '#e5e5e5',
          600: '#ebebeb',
          700: '#f0f0f0',
          800: '#f5f5f5',
          900: '#fafafa'
        },
        white: {
          DEFAULT: '#ffffff',
          400: '#cccccc',
          500: '#ffffff'
        },
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}
