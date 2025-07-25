/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        vs: "510px",
        us: "385px",
        ws: "305px",
        // => @media (min-width: 430px) { ... }
      },
      colors: {
        night: "#151414",
        primary: "#2B2929",
        crayola: "#FF8042",
        mint: "#00C49F",

        tomato: "#F61C1C",
        crimson: "#DC143C",
        fireengine: "#CE2029",
        cherryred: "#FF4C4C",

        peach: "#FFDAB9",
        skyline: "#7EC8E3",
        lavender: "#E6E6FA",
        teal: "#008080",
      },
    },
  },
  plugins: [],
};
