/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#006EE9",
          800: "#311F65",
        },
        gray: {
          DEFAULT: "#474747",
          800: "#A9A2A2",
        },
        red: {
          800: "#D92C2C",
        },
        green: {
          800: "#239D3E",
        },
        blue: {
          200: "#ABCEF5",
          600: "#006EE9",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontSize: {
        xxs: "10px",
      },
      dropShadow: {
        "top-md": "0 -1px 20px rgba(0, 110, 233, 0.1)",
      },
    },
  },
  plugins: [],
};
