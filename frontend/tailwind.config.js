module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "240px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        background: "#f0f8ff",
        nav: "#030221",
        foreground: "#EDF2F4",
        secondary: "#d4d4d4",
        danger: "#EF233C",
        button: "#01B6F3",
        alert: "#FCC72B",
        good: "#67F167",

        main: "#F67534",
      },
    },
  },
  plugins: [],
};
