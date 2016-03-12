var webpack = require('webpack');
var isProd = (process.env.NODE_ENV === 'production');
function getPlugins() {
    var plugins = [];

    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': process.env.NODE_ENV
        }
    }));

    if (isProd) {
        // Production ENV
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true
            }
        }));
    }
    else {
        // Development ENV
    }
    return plugins;
}

module.exports = {
    plugins: getPlugins()
};

