const path = require('path');

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
};
