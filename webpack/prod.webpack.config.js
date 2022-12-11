const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, '..', 'src', 'index.jsx'),
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '..', 'lib'),
        filename: "index.js",
        clean: true,
        library: {
            name: 'RCP',
            type: 'umd'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            }
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, '..', 'src', 'index.d.ts')
            }]
        })
    ]
};
