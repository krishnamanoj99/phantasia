/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        "pomp" : "#886190",
        "darkpurple": "#392c48",
        "englishviolet": "#4c3c63",
        "fairytale" : "#F2E5E8",
        "lilac": "#bd91b2",
      },
      textColor : {
        "pomp" : "#886190",
        "darkpurple": "#392c48",
        "englishviolet": "#4c3c63",
        "fairytale" : "#F2E5E8",
        "lilac": "#bd91b2",
      }
    },
  },
  plugins: [],
}

