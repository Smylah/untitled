/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1148px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightPurple: "#7F56D9",
        darkerPurple: "#53389E",
        primary200: "#E9D7FE",
        success700: "#027A48",
        success50: "#ECFDF3",
        primary700: "#6941C6",
        primary50: "#F9F5FF",
      },
      fontFamily: {
        inter: ["INTER", "san-serif"],
      },
    },
  },
  plugins: [],
}
