// 手动安装一下 html-webpack-plugin
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
}