var webpack = require('webpack');
var path = __dirname;
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path + '/target/',
        publicPath: "/target/",
        filename: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loaders: ['react-hot', 'jsx?harmony'],
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
