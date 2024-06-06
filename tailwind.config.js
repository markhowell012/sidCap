/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        375: "150px",
        500: "500px",
        1110: "1110px",
        1320: "1320px",
        1440: "1440px",
        1620: "1620px",
        1720: "1720px",
      },
      colors: {
        primary: "#ffc300",
        background: "#000",
        secondary: "#333",
        light: "#fff",
        gray: "#7B7B7B",
        offWhite: "#F4FDF8",
        red: "#FF0000",
        textinput: "#01397AA1",
        lighttext: "#bababa",
      },

      boxShadow: {
        main: "0px 2px 4px rgba(0, 0, 0, 0.15), 0px -2px 4px rgba(0, 0, 0, 0.15);",
        secondary: ["0px 3px 15px rgba(0, 0, 0, 0.1)"],
        right: ["0px 3px 15px rgba(0, 0, 0, 0.1)"],
        inner:
          " inset 0px 1px 2px rgba(97, 97, 97, 0.2), inset 0px 2px 4px rgba(97, 97, 97, 0.2)",
        thin: "0px 1px 4px rgba(0, 0, 0, 0.05), 0px 0px 4px rgba(0, 0, 0, 0.01);",
      },
    },
  },
  plugins: [],
};
