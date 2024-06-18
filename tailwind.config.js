/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

import scanlineEffectPlugin from "./src/tailwind-plugins/scanlineMaskPlugin.js";
import neonTextPlugin from "./src/tailwind-plugins/neonTextPlugin.js";
import maskImagePlugin from "./src/tailwind-plugins/maskImagePlugin.js";

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
    plugin(scanlineEffectPlugin),
    plugin(neonTextPlugin),
    plugin(maskImagePlugin),
  ],
}

