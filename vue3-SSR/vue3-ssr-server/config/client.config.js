let path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports =merge(baseConfig,{
    target: 'web',
    entry: './src/client/index.js',
    output: {
        filename: 'client_bundle.js',
        path: path.resolve(__dirname, '../build/client')
    },
    plugins: [
        // new VueLoaderPlugin(),
        // new DefinePlugin({
        // __VUE_PROD_DEVTOOLS__: false, // 生产环境的日志不打包
        // __VUE_OPTIONS_API__: false // vue option api 不打包
        // })
    ]
})  