const buildPlugins = require('./buildPlugins.js');
const buildDevServer = require('./buildDevServer.js');
const buildLoaders = require('./buildLoaders.js');

module.exports = function buildWebpackConfig(options) {
	const { paths, mode, isDev } = options;
	const { entry, build } = paths;

	return {
		entry,
		mode,
		output: {
			filename: '[main].[contenthash].js',
			path: build,
			clean: true,
		},
		plugins: buildPlugins(options),
		devServer: buildDevServer(options),
		devtool: isDev ? 'inline-source-map' : false,
		module: {
			rules: buildLoaders(),
		},
	};
};
