/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "hsl(240, 38%, 20%)",
        "secondary-500": "hsl(240, 18%, 77%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        thin: "300",
        normal: "500",
        bold: "700",
      },
      content: {
        patternbg: "url('./assets/pattern-bg.svg')",
        patterncurve: "url('./assets/pattern-curve.svg')",
        patternquotes: "url('./assets/pattern-quotes.svg')",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
};
