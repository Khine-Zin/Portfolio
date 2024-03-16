/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#1D0838",
        secondary: "#393A47",
        accent: "#c90a83",
      },

      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        primary: "Aldrich",
        secondary: "Rajdhani",
        orbitron: "Orbitron",
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [],
};
