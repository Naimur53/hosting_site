/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'neutral': {
          0: '#FFFFFF',
          50: '#E3E3E3',
          100: '#F6F7F9',
          200: '#E4E5E9',
          300: '#D4D7DF',
          400: '#AAAFB9',
          500: '#858D98',
          600: '#4B4E56',
          700: '#161819',
        },
        "dark-blue": '#0D55AB',
        "main-blue": '#0074FF',
        "dark-bright-blue": '#0074FF',
        "bright-blue": '#0074FF',
        "light-blue": '#0074FF',
        "seen-blue": '#0067FF',
        'danger': {
          100: '#E10721',
          200: '#C60B21',
          300: '#981717',

        },
        'disable': '#F1F1F1',
        'upHeading': '#1B1E24',
        'label': '#252631',
        'input': '#1B1E24',
        'endText': '#778CA2',
        'placeholder': '#98A9BC',
        'black': "#172228",
        'banner': '#08192D'
      },
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif']
      },
      fontSize: {
        'xs': ['14px', { lineHeight: '20px', }],
        'ls': ['16px', { lineHeight: '22px', }],
        'sm': ['18px', { lineHeight: '24px', }],
        'normal': ['24px', { lineHeight: '32px', }],
        'base': ['32px', { lineHeight: '40px', }],
        'lg': ['40px', { lineHeight: '48px', }],
        'xl': ['48px', { lineHeight: '56px', }],
        '2xl': ['56px', { lineHeight: '64px', }],
        '3xl': ['64px', { lineHeight: '72px', }],
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      boxShadow: {
        input: '0px 16px 27px 0px #91C0FF',

      },
      spacing: {
        '108': '8px',
        '114': '14px',
        '115': '15px',
        '116': '16px',
        '118': '18px',
        '120': '20px',
        '136': '36px',
        '138': '38px',
        '148': '48px',
        '150': '50px',
      }
    },
  },
  plugins: [],
}
