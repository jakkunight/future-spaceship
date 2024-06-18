const maskImagePlugin = ({ matchUtilities, addUtilities, theme }) => {
  matchUtilities({
    mask: (value) => ({
      maskImage: value
    })
  }, {
      values: {
        none: ""
      }
    });

  addUtilities({
    ".mask-repeat": {
      maskRepeat: "repeat"
    },
    ".mask-no-repeat": {
      maskRepeat: "repeat"
    },
    ".mask-luminance": {
      maskMode: "luminance"
    },
    ".mask-alpha": {
      maskMode: "alpha"
    },
    ".mask-cover": {
      maskSize: "cover"
    },
    ".mask-contain": {
      maskSize: "contain"
    }
  });
};

export default maskImagePlugin;
