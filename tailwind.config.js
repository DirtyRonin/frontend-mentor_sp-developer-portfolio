/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'font-xl': ['88px', { lineHeight: '88px', letterSpacing: '-2.5px', fontWeight: '700' }],
        'font-l': ['48px', { lineHeight: '56px', letterSpacing: '-1.5px', fontWeight: '700' }],
        'font-m': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'font-text': ['18px', { lineHeight: '28px', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
};
