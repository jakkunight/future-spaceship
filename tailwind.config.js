/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const scanlinesPlugin = ({ theme, addUtilities }) => {
  const scanlinesUtility = {};
  const colors = theme("colors");
  for (let color in colors) {
    if (typeof colors[color] === "object") {
      for (let variant in colors[color]) {
        scanlinesUtility[`.scanlines-${color}-${variant}`] = {
          maskImage: `linear-gradient(#0000 10%, ${colors[color][variant]} 90%, #0000 100%)`,
          maskSize: `100% 2px`
        }
      }
    }
  }
  addUtilities(scanlinesUtility);
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vt323: ["VT323", "monospace"]
      },
      keyframes: {
        oldCrtAnimation: {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "0 1000vh",
          }
        }
      },
      animation: {
        oldcrt: "oldCrtAnimation 100s linear infinite",
      },
    },
  },
  plugins: [
    plugin(scanlinesPlugin)
  ],
}

