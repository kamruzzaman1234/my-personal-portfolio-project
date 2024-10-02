/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oldstandard: ['"Old Standard TT"', 'serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

