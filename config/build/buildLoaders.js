module.exports = function buildLoaders() {
	return [
		{
			test: /\.s[ac]ss$/i,
			use: [
				'style-loader',
				'css-loader',
				{
					loader: 'sass-loader',
					options: {
						implementation: require('sass'),
					},
				},
			],
		},
	];
};
