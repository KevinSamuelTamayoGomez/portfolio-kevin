/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      colors: { brand: { DEFAULT: '#0ea5e9', dark: '#0284c7' } },
      boxShadow: { soft: '0 10px 25px -10px rgba(0,0,0,0.15)' },
    },
  },
  plugins: [],
}
