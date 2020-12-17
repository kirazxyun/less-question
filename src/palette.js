module.exports = {
  install(_, __, functions) {
    functions.add('color-palette', (color) => {
      return color.value;
    });
  },
};
