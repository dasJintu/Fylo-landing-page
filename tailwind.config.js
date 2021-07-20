module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "hsl(243, 87%, 12%)",
        "desat-blue": "hsl(238, 22%, 44%)",
        "bright-blue": "hsl(224, 93%, 58%)",
        "mod-cyan": "hsl(170, 45%, 43%)",
        "lg-blue": "hsl(240, 75%, 98%)",
        "light-gray": "hsl(0, 0%, 75%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
