module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { desktop: "1640px" },

      width: {
        440: "110rem",
        238: "59.5rem",
        215: "53.75rem",
        162.25: "40.5625rem",
        66.75: "16.6875rem",
      },
      height: {
        13: "3.25rem",
        83: "20.75rem",
        83.25: "20.8125rem",
      },
      fontFamily: {
        podkova: ["Podkova", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        green: "#77C83C",
        grey: {
          DEFAULT: "#222222",
          light: "#C4C4C4",
        },
      },
      fontSize: {
        4.5: "1.125rem",
        60: "15rem",
        16: "4rem",
      },
      padding: {
        57.25: "14.3125rem",
      },
    },
  },
  plugins: [],
};
