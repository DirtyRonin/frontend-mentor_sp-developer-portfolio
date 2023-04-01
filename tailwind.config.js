/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'font-xl': ['88px', { lineHeight: '88px', fontWeight: '700' }],
        'font-l': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'font-m': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'font-text': ['18px', { lineHeight: '28px', fontWeight: '500' }],
        'font-mobile-l': ['40px', { lineHeight: '40px', letterSpacing: '-1.14px', fontWeight: '700' }],
        'font-mobile-experience-header': ['32px', { lineHeight: '40px', letterSpacing: '-1px', fontWeight: '700' }],
        'font-mobile-experience-text': ['16px', { lineHeight: '26px', letterSpacing: '0', fontWeight: '500' }],
        'font-mobile-m': ['24px', { lineHeight: '32px', letterSpacing: '-.33px', fontWeight: '500' }],
        'font-mobile-text': ['16px', { lineHeight: '28px', letterSpacing: '0', fontWeight: '700' }],
        'font-mobile-button': ['16px', { lineHeight: '26px', letterSpacing: '2.29px', fontWeight: '700' }],
        'font-mobile-input': ['16px', { lineHeight: '26px', letterSpacing: '-0.22px', fontWeight: '500' }],
      },
      colors: {
        'theme-black': 'hsl(0,0%,8%)',
        'theme-gray-black': 'hsl(0,0%,14%)',
        'theme-gray': 'hsl(0,0%,85%)',
        'theme-green': 'hsl(153,71%,59%)',
      },
    },
  },
  plugins: [],
};
