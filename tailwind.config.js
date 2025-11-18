export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        crimson: ['"Crimson Text"', "serif"],
      },

      colors: {
        "brand-dark-bg": "#0D0C14",
        "brand-card-bg": "#161324",
        "brand-border": "rgba(255, 255, 255, 0.1)",
        "brand-label": "#B0A7D4",
        "brand-purple": "#A061FF",
        "brand-blue": "#408CFF",
      },

      boxShadow: {
        "glow-purple":
          "0 0 15px rgba(160, 97, 255, 0.6), 0 0 5px rgba(160, 97, 255, 0.4)",
        "glow-blue":
          "0 0 15px rgba(64, 140, 255, 0.6), 0 0 5px rgba(64, 140, 255, 0.4)",
      },

      animation: {
        "gradient-bg": "gradient-bg-animation 15s ease infinite",
      },
      keyframes: {
        "gradient-bg-animation": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
