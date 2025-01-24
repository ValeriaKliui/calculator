const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = function buildPlugins({ paths }) {
	const { html, favicon } = paths;

	return [
		new HtmlWebpackPlugin({
			template: html,
			favicon: favicon,
		}),
		new webpack.ProgressPlugin(),
	];
};
