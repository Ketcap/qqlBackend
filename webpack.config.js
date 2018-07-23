const path = require('path');
module.exports = {
	entry: './index.js',
	target: 'node',
	output: {
		path: path.resolve(__dirname + '/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js&/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: [
						'latest'
					]
				}
			}
		]
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules']

	},
	mode: 'production'
};