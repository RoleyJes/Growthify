import { transform, TypeFormatFlags } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#008ce1",
        darkBlue: "#001940",
        neutral100: "#e4e3e6",
        neutral500: "#767584",
        neutral800: "#3b3b42",
      },
      fontFamily: {
        hero: ["Abhaya\\ Libre", "serif"],
      },
    },
  },
  plugins: [],
};
