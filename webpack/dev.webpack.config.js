const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './playground/index.jsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: "main.js"
    },
    devtool: "eval-source-map",
    devServer: {
        static: path.resolve(__dirname, '..', 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({ template: path.resolve(__dirname, '..', 'public', 'index.html') })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
