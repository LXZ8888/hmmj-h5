const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 修改主题的地方
            // 直接覆盖变量
            // '@blue': '#fa6d1d'
            hack: 'true; @import "/src/styles/xx.less";'
          }
        }
      }
    }
  },
  publicPath: './'
})
