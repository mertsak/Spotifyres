/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar_bg: "#000",
        sidebar_text: "#b3b3b3",
        sidebar_text_active: "#ffff",
        content_bg: "#121212",
        bottombar_bg: "#202020",
        bottombar_border: "#282828",
        arrow_bg: "rgba(0,0,0,.7)",
        user_bg: "#535353",
        user_dropdown: "#282828",
        spotify_green: "#1db954",
        user_nav_bg: "#ffffff1a",
        suggested_bg: "hsla(0,0%,100%,0.1)",
        suggested_bg_hover: "hsla(0,0%,100%,0.2)",
        social_bg: "rgb(41, 41, 41)",
        facebook: "#384F81",
      },
      gridTemplateColumns: {
        auto_fit: "repeat(auto-fit, minmax(200px, 1fr))",
        auto_fit2: "repeat(auto-fit, minmax(175px, 1fr))",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
