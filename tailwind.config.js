/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      objectPosition: {
        "center-top": "center top",
      },
    },
    screens: {
      // sm: "375px", 要另外做，但不用設定
      md: "768px",
      lg: "1200px",
      xl: "1800px",
    },
    // screens: {

    //   sm: '375px',
    //   md: '768 px',
    //   lg: '1200px',
    //   xl:'1920px',

    // },
    colors: {
      MainColorBG: "#fff8dc",
      MainColor: "#024b06",
      EmphasizeColor: "#ffc700",
      // SubColorBG:""
    },
  },
  plugins: [],
};
