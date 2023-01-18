let path = require('path')
let nodeExternals = require('webpack-node-externals')
let { VueLoaderPlugin } = require('vue-loader/dist/index')
const { merge } = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig,{
    target: 'node',
    entry: './src/server/index.js',
    output: {
        filename: 'server_bundle.js',
        path: path.resolve(__dirname, '../build/server')
    },
    // plugins: [new VueLoaderPlugin()],
    externals: [nodeExternals()], // 打包 排除nodemodeuls包
})