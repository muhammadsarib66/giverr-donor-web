const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  // purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary : "#063B39",
        bgSecondary : "#EEEEEE",
        // superSecondary :'#CADBFF', // light green
        // superPrimary: "#1a305d", // dark green
        // superOnPrimary: "#1a305d", // light green
        // onPrimary: "#292962", // dark purple
        // secondary: "#FFFFFF", // white
        // OnSecondary: "#EBEBEB", // gray
        // errorText : "#FF0000", // red
        // Gray4: "#BDBDBD" , //  gray
        // Gray5: "#E0E0E0" , // light gray
        // Gray3: "#FBFBFB" , // light gray
        // Gray2: "#828282" , // dark gray
        // Gray1: "#EBEBEB" , //  gray


        textSecondary: "#4F4F4F", // light gray
        textDarkGray : '#4F4F4F', // dark gray
        onBackground: "#8755EF", // purple

        // for dark mode
        darkPrimary: "#3F3FB0", // dark purple
        darkOnPrimary: "#f3f3f3", // text white
        darkServices: "#282828", // dark gray
        darkSecondary: "#212121", //black background
      },
      fontFamily: {
        sans: ['"Outfit"', "sans-serif"],
        mono : ["monospace"]
      },
    },
  },
  plugins: [],
});
