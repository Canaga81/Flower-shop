/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: `"Montserrat", sans-serif`,
    },
    screens: {
      rd: "384px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      cr: "1060px",
      xl: "1440px",
    },
    extend: {
      colors: {
        searchBg: '#FFD1D7',
        heroText: '#665F5F',
      },
    },
  },
  plugins: [],
};
