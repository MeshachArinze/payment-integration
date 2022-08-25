/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/components/Navbar/**/*.{js,jsx}",
    "./src/components/Header/**/*.{js,jsx}",
    "./src/components/Home/**/*.{js,jsx}",
    "./src/components/About/**/*.{js,jsx}",
    "./src/components/Service/**/*.{js,jsx}",
    "./src/components/Contact/**/*.{js, jsx}",
  ],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      spacing: {
        sm: "3px",
        md: "5px",
        lg: "16px",
        xl: "24px",
      },
      colors: {
        lightPurple: "hsl(255, 98%, 17%)",
        navyBlue: "hsl(233, 93%, 12%)",
        lightOrange: "rgb(255, 205, 23)",
        lightBlack: "#222",
        lightDark: "rgba(0, 0, 0, 0.2)",
        lightGrey: "hsl(210, 36%, 96%)",
        lightWhite: "#fff",
        lightTorquise: "hsl(178, 100%, 55%)",
        lightGreyp: "hsl(208, 16%, 19%)",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {},
      animation: {},
      backgroundColor: {
        lightPurple: "hsl(255, 98%, 17%)",
        navyBlue: "hsl(233, 93%, 12%)",
        lightOrange: "rgb(255, 205, 23)",
        lightBlack: "#222",
        lightDark: "rgba(0, 0, 0, 0.2)",
        lightGrey: "hsl(210, 36%, 96%)",
        lightWhite: "#fff",
        lightTorquise: "hsl(178, 100%, 55%)",
        lightGrey: "hsl(208, 16%, 19%)",
      },
    },
  },
  plugins: [],
};

