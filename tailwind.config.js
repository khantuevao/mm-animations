/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'green': '#84cc16',
      'hider': '#AD3FBF',
      'guesser': '#3FA0BF',
      'basecolor': '#D9D9D9',
      'basebg': '#1C2258',
      'grad1': 'rgba(255, 255, 255, 0.42)',
      'grad2': 'rgba(166, 166, 166, 0.29)',
    },
    extend: {
      keyframes: {
        botToBot: {
          '0%': { transform: 'translateY(4rem)', opacity: '0' },
          '10%': { transform: 'translateY(0rem)', opacity: '1' },
          '90%': { transform: 'translateY(0rem)', opacity: '1' },
          '100%': { transform: 'translateY(4rem)', opacity: '0' },
        },
        smallToBig: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '15%': { transform: 'scale(1.2)', opacity: '1' },
          '20%': { transform: 'scale(1)', opacity: '1' },
          '80%': { transform: 'scale(1)', opacity: '1' },
          '85%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
      },
      animation: {
        'bot-to-bot': 'botToBot 4s ease-in-out infinite',
        'small-to-big': 'smallToBig 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
