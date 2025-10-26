/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
 ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#f7edf0',
        secondary: '#f4cbc6',
        accent: '#F4AFAB',
        vanilla: '#F4EEA9',
        icterine: '#F4F482',
      },
    },
  },
  plugins: [],
}

