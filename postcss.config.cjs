const postcssJitProps = require("postcss-jit-props");

module.exports = {
  plugins: [
    require("postcss-custom-media"),
    require("autoprefixer"),
    postcssJitProps(require("open-props")),
    require("postcss-preset-env")({
      stage: 0,
      features: {
        "custom-media-queries": true,
      },
    }),
  ],
};
