module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@components": "./components",
          "@screens": "./screens",
          "@assets": "./assets",
        },
      },
    ],
  ],
};
