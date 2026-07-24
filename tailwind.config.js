/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        panel: '#0d0d0f',
        line: '#1f1f23',
        accent: '#3d5ea6',
        silver: '#c7c9cd',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '.28em',
      },
    },
  },
  plugins: [],
};
