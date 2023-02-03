const path = require("path");

module.exports = {
  resolve: {
    // 添加了这项配置 引入文件时就不能在写后缀
    extensions: [".js", ".json", ".jsx", ".wasm"],
    alias: {
      "@": path.join(__dirname, "./src"),
      //表示设置路径别名这样在import的文件在src下的时候可以直接 @/component/...
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
