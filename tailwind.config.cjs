/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#0033FF",
        dark: "#272727",
        redGray: "#958A8A",
        lightGray: "rgba(96, 96, 96, 0.5)",
        darkGray: "rgba(89, 89, 89, 1)",
        bgLayer10: "rgba(255, 255, 255, 0.2)",
        bgLayer40: "rgba(255, 255, 255, 0.4)",
        bgLayer60: "rgba(255, 255, 255, 0.6)",
        bgLayer90: "rgba(255, 255, 255, 0.9)"
      },
      fontFamily: {
        sohne: ["Montserrat", "sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1440px",
      xxl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
