module.exports = {
  babelrcRoots: ["packages/*", "src/*"],
  presets: [
    [
      require.resolve("@babel/preset-env"),
      {
        modules: false,
        targets: {
          ie: "11",
          browsers: ["> 0.5%", "last 2 versions"]
        }
      }
    ],
    require.resolve("@babel/preset-flow"),
    require.resolve("@babel/preset-react")
  ],
  plugins: [["@babel/plugin-proposal-class-properties", { loose: true }]]
};
