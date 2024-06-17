/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const textShadowPlugin = ({ theme, addUtilities }) => {
  const textShadowUtility = {};
  const colors = theme("colors");
  for (let color in colors) {
    if (typeof colors[color] === "object") {
      for (let variant in colors[color]) {
        textShadowUtility[`.scanlines-${color}-${variant}`] = {
          maskImage: `linear-gradient(#0000 10%, ${colors[color][variant]} 90%, #0000 100%)`,
          maskSize: `100% 2px`
        }
      }
    }
  }
  addUtilities(textShadowUtility);
};

const scanlinesPlugin = ({ theme, addUtilities }) => {
  const scanlinesUtility = {};
  const colors = theme("colors");
  for (let color in colors) {
    if (typeof colors[color] === "object") {
      for (let variant in colors[color]) {
        scanlinesUtility[`.neon-text-${color}-${variant}`] = {
          textShadow: `0 0 20px ${colors[color][variant]}, 0 0 20px ${colors[color][variant]}, 0 0 30px ${colors[color][variant]}, 0 0 30px ${colors[color][variant]}`,
          color: `${colors[color][variant]}`
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
        vt323: ["VT323", "monospace"],
        bigblueterm: ["bigblueterm", "sans-serif"]
      },
      keyframes: {
        oldCrtAnimation: {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "0 1000vh",
          }
        },
        flashingAlert: {
          "100%": {
            textShadow: "0 0 20px, 0 0 20px, 0 0 30px, 0 0 30px",
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            opacity: "100%"
          },
          "50%": {
            textShadow: "0 0 20px, 0 0 20px, 0 0 30px, 0 0 30px",
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            opacity: "100%"
          },
          "0%": {
            textShadow: "0 0 20px, 0 0 20px, 0 0 30px, 0 0 30px",
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            opacity: "0%"
          }
        }
      },
      animation: {
        oldcrt: "oldCrtAnimation 100s linear infinite",
        flashalert: "flashingAlert 1s ease-in-out infinite"
      },
    },
  },
  plugins: [
    plugin(scanlinesPlugin),
    plugin(textShadowPlugin)

  ],
}

