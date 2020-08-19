module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  productionSourceMap:false,
  // devServer: {
  //   proxy: 'http://localhost:4000'
  // },
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: { //这里的选项会传递给 less-loader
        javascriptEnabled: true //
      }
    }
  }
}
