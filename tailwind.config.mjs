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
      'mobile': { 'min': '320px', 'max': '767px' },
      // => @media (min-width: 576px) { ... }

      'tablet': { 'min': '768px', 'max': '992px' },
      // => @media (min-width: 960px) { ... }

      'desktop': { 'min': '993px', 'max': '1600px' },
      // => @media (min-width: 1440px) { ... }

    },
    fontSize: {
      sm: '0.8rem',
      base: ['1rem', '2rem'],
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': ['2rem', '2rem'],
      '4xl': ['2.5rem', '2.5rem'],
      '5xl': '3.052rem',
      '7xl': ['4.5rem', '4.5rem'],
      '8xl': ['5rem', '5rem'],
    },
    colors: {
      'Black': ' #151515',
      'Green': '#4EE1A0',
      'Dark-Grey': '#242424',
      'Grey': ' #D9D9D9',
      'White': ' #FFFFFF',
    },
    letterSpacing: {
      tightest: '-0.071rem',
      tighter: '-0.12781rem',
      tight: '-0.15625rem',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    }
  },
  plugins: [require("tailwindcss-animate")],
}