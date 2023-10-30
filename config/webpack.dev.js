const HtmlWebpack = require('html-webpack-plugin');
const webpack = require('webpack'); 
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // 使用loader处理css文件
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    // 使用htmlWebpack模板插件
    plugins: [
        new HtmlWebpack({
            template: './index.html'
        })
    ],
    //开发服务器
    devServer: {
        host: '127.0.0.1', // 域名
        port: '3000', // 端口
        open: true // 是否自动打开浏览器
    },
    // 模式
    mode: 'development'
}
