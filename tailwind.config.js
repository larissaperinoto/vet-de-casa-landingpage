/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#3E95A2",
        "secondary": "#3E7183"
      },
      fontFamily: {
        handwriting: ["Cookie, cursive"],
        title: ["Titan One, cursive"],
        paragraph: ["PT Serif', serif"],
      },
      container: {
        center: true,
      },
      screens: {
        sm: "640px",
        md: "768px",
      }
    },
  },
  plugins: [],
}

