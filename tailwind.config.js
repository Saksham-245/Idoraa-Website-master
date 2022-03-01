const { image, url } = require("tailwindcss/lib/util/dataTypes");
module.exports = {
  content: [
    "**/*.html",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        background: "#170958",
        link: "#0091ea",
        white: "#fff",
        orange: "#f7b500",
        pink: "#b620e0",
        blue: "#32c5ff",
        green: "#82beb6",
        gray: "#e6e6e6",
        lightgray: "#eaeaea",
        transparent: "transparent",
        darkgray: "#727272",
        "light-dark-gray": "#505050",
        lightBlack: "#263f3c",
        darkBlue: "#0084ff",
        "dark-gray": "#838383",
        "copyright-color": "#595959",
        "footer-gray-text": "#8a8a8a",
        form_border_color: "#dddddd",
        icon_color: "#0a7aff",
      },
      spacing: {
        "3.5rem": ["3.5rem"],
      },
      fontFamily: {
        titiliumWeb: ["Titillium Web", "sans-serif"],
        Gilroy_Bold: ["Gilroy-Bold", "sans-serif"],
        Gilroy_Light: ["Gilroy-Light", "sans-serif"],
        Gilroy_Regular: ["Gilroy-Regular", "sans-serif"],
        HelveticaNeue: ["Helvetica Neue", "sans-serif"],
      },
      lineHeight: {
        1.3: "1.313rem",
        2.75: "2.75rem",
        21: "1.313",
        4: "4.688rem",
      },
      fontSize: {},
      height: {
        "4/7": "56%",
      },
      textUnderlineOffset: {
        10: "20px",
      },
      screens: {
        xs: { max: "576px" },
        "sm-l": {
          min: "481px",
          max: "767px",
        },
        "md-l": {
          min: "768px",
          max: "1024",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
