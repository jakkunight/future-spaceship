const scanlineEffectPlugin = ({ theme, addUtilities }) => {
  const scanlineEffectUtility = {};
  const colors = theme("colors");
  for (let color in colors) {
    if (typeof colors[color] === "object") {
      for (let variant in colors[color]) {
        scanlineEffectUtility[`.scanlines-${color}-${variant}`] = {
          maskImage: `linear-gradient(0deg, transparent 0%, black 25%, black 75%, transparent 100%)`,
          maskSize: `100% 3px`
        }
      }
    }
  }
  addUtilities(scanlineEffectUtility);
};

export default scanlineEffectPlugin;

