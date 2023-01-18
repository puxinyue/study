//webpack  client和server 公共使用的配置

let path = require('path')
let { VueLoaderPlugin } = require('vue-loader/dist/index')
module.exports = {
    mode: 'development',
    resolve: {
        // 添加了这项配置 引入文件时就不能在写后缀
        extensions: ['.js', '.json', '.jsx', '.vue', '.wasm'],
        alias: {
            '@': path.join(__dirname, './src')
            //表示设置路径别名这样在import的文件在src下的时候可以直接 @/component/...
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }

            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }

        ]
    },
    plugins: [new VueLoaderPlugin()]
}