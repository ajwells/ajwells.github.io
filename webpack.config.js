//webpack.config.js

module.exports={
	entry: './index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.coffee$/, loader: 'coffee-loader' },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.json', '.coffee']
	}
};

