var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'sourcemap',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'react-hot!babel', exclude: [/node_modules/]},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    postcss: function () {
        return [autoprefixer];
    }
};