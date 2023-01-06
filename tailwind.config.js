/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-primary": "#1f1f1f",
        "neutral-secondary": "#909090",
        "neutral-surface": "#FBFBFB",
        "neutral-border": "E7E7E7",
        "brand-primary": "#3A6436",
        "brand-secondary": "#DDFFDA",
        "brand-tertiary": "#1A60FF",
      },
    },
  },
  plugins: [],
};
