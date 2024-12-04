/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Add xs breakpoint for screens smaller than 640px
      },
      keyframes: {
        particle1: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(100vw, -100vh)' },
        },
        particle2: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-100vw, 100vh)' },
        },
        // Add other particle animations as needed
      },
      animation: {
        particle1: 'particle1 10s linear infinite',
          particle2: 'particle2 15s linear infinite',
          particle3: 'particle3 12s linear infinite',
          particle4: 'particle4 8s linear infinite',
          particle5: 'particle5 6s linear infinite',
          particle6: 'particle6 14s linear infinite',
          particle7: 'particle7 11s linear infinite',
          particle8: 'particle8 9s linear infinite',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
