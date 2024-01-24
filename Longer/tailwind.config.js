/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: '375px',
      md: '481 px',
      lg: '1200px',
      xl:'1920px',
     
    },
    colors: {
      MainColorBG: "#fff8dc",
      MainColor: "#024b06",
      EmphasizeColor: "#ffc700",
      // SubColorBG:""
    },
  },
  plugins: [],
};
