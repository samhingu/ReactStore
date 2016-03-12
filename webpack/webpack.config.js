const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const isProd = (process.env.NODE_ENV === 'production');
const PATHS = {
    app: path.join(__dirname, '../app'),
    build: path.join(__dirname, './dist')
};

function getPlugins() {
    var plugins = [];
    plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    plugins.push(new webpack.NoErrorsPlugin());
    plugins.push(new CleanPlugin(PATHS.build, { verbose: true, dry: false }));
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        },
        __DEVELOPMENT__: !isProd
    }));
    plugins.push(new HtmlPlugin({
        title: 'React Store',
        template: 'index.html',
        inject: 'body'
    }))
    plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'));
    plugins.push(new ExtractTextPlugin('[name].[contenthash].css', {
        allChunks: true
    }));

    plugins.push(new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }));
    if (isProd) {
        // Production ENV
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true,
                warnings: false
            },
            output: {
                comments: false
            }
        }));
    }
    else {
        // Development ENV
    }
    return plugins;
}

function getLoaders() {
    var loaders = [];

    loaders.push({
        test: /\.js[x]?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
    });
    loaders.push({
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
    });
    return loaders;
}

var config = {
    context: PATHS.app,
    entry: {
        app: 'index.jsx',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: PATHS.build,
        filename: '[name].[hash].js'
        //publicPath: 'cdn path where our bundled files are going to be host'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        modulesDirectories: ['node_modules', PATHS.app]
    },
    module: {
        preLoaders: [
            {
                test: /\.js[x]?$/,
                loaders: ['eslint'],
                include: PATHS.app
            }
        ],
        loaders: getLoaders()
    },
    plugins: getPlugins()
};

if (!isProd) {
    config.cache = true;
    config.devtool = 'eval';
    config.watch = true;
}

module.exports = config;