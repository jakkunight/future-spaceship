const neonTextPlugin = ({ theme, addUtilities }) => {
  const neonTextUtility = {};
  const colors = theme("colors");
  for (let color in colors) {
    if (typeof colors[color] === "object") {
      for (let variant in colors[color]) {
        neonTextUtility[`.neon-text-${color}-${variant}`] = {
          textShadow: `0 0 20px ${colors[color][variant]}, 0 0 20px ${colors[color][variant]}, 0 0 30px ${colors[color][variant]}, 0 0 30px ${colors[color][variant]}`,
          color: `${colors[color][variant]}`
        }
      }
    }
  }
  addUtilities(neonTextUtility);
};

export default neonTextPlugin;
