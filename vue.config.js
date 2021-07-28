
const webpack = require('webpack')
const { ORIGIN } = require('./src/config/origin')

module.exports = {
  // 选项...
    //  部署应用包时的基本 URL。
  publicPath: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。 Default: 'dist'
  outputDir: 'oaSystem',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
    // 是否使用包含运行时编译器的 Vue 构建版本。
  runtimeCompiler: true,
    // 
  lintOnSave: false,
    // 
  devServer : { 
    // 为所有服务启用gzip 压缩：
    compress: true,
    // 服务器启动后打开浏览器
    open: true,
    // 端口号
    port: 8080,
    // 代理
    proxy: {
        '/api': {  
            target: ORIGIN,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }  
        }
    }  
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.VUE_APP_ENV': JSON.stringify(process.env.VUE_APP_ENV),
    }),
    ]
  }
}