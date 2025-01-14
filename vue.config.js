const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  /* 表示可以使用 index 这样的名字命名文件 */
  lintOnSave: false,

  /* 配置 publicPath 为相对路径 */
  // publicPath: './',

  // 生产环境下不生成 source map
  productionSourceMap: false,

  devServer: {
    port: 8080,
    open: true
  }
})