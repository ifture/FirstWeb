const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  /* 表示可以使用 index 这样的名字命名文件 */
  lintOnSave: false,

})
