var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');
var utils = require('./utils');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	noInfo: false,
	historyApiFallback: true
}).listen(3000, 'localhost', function(err, result) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at localhost:3000');
});

var fs = require('fs');

var projectFile = '/Users/liuChengyua/Desktop/sails';

fs.watch(projectFile, {}, function(e, fileName) {
	var path = utils.watchProject(fileName);
})