1.webpack4和webpack-cli2点多的话，再npx webpack会报Cannot read property 'properties' of undefined
  改变：webpack-cli改为3点

2.webpack4使用clean-webpack-plugin,报CleanWebpackPlugin is not a constructor
  改变；
  错误写法--
  const CleanWebpackPlugin = require("clean-webpack-plugin");
  正确写法--
  const { CleanWebpackPlugin } = require("clean-webpack-plugin");

