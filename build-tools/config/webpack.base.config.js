const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

const projectRoot = path.resolve(__dirname, '..', '..');
const dist = path.resolve(projectRoot, 'dist');
const frontendRoot = path.resolve(projectRoot, 'frontend');

module.exports = {
	entry: path.resolve(frontendRoot, 'index.js'),
	output: {
		path: dist,
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(frontendRoot, 'index.html')
		}),

		new WasmPackPlugin({
			crateDirectory: projectRoot
		})
	]
};
