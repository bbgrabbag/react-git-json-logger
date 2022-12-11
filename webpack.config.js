const prodConfig = require('./webpack/prod.webpack.config');
const devConfig = require('./webpack/dev.webpack.config');

const isProd = process.env.NODE_ENV === 'production';
module.exports = () => {
    return isProd ?
        prodConfig :
        devConfig
}