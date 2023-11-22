/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    fontSize: {
      sm: '0.8rem',
      base: ['1rem', '2rem'],
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': ['2rem', '2rem'],

      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      'Black': ' #151515',
      'Green': '#4EE1A0',
      'Dark-Grey': '#242424',
      'Grey': ' #D9D9D9',
      'White': ' #FFFFFF',
    },
  },
  plugins: [require("tailwindcss-animate")],
}