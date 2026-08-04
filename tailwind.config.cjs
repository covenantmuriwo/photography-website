// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    'bg-gray-900',
    'text-white',
    'h-screen',
    'flex',
    'items-center',
    'justify-center',
    'text-3xl',
    'p-10'
  ],
  theme: {
  extend: {
  fontFamily: {
    script: ["Allura", "cursive"],
    heading: ["Cormorant Garamond", "serif"],
  },
},
},
  plugins: [],
}