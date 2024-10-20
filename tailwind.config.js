/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#384B70',
        purple: '#624E88',
      },
    },
  },
  variants: {},
  plugins: [],
};
