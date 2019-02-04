const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

const projectRoot = path.resolve(__dirname, '..', '..');
const dist = path.resolve(projectRoot, 'dist');
const frontendRoot = path.resolve(projectRoot, 'frontend');

module.exports = {
	entry: path.resolve(frontendRoot, 'index.ts'),
	output: {
		path: dist,
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(frontendRoot, 'index.html')
		}),
		new WasmPackPlugin({
			crateDirectory: projectRoot,
			withTypeScript: true
		}),
		new TSLintPlugin({
			files: [path.resolve(frontendRoot, '**/*.ts')]
		})
	],
	module: {
		rules: [
			{
				test: /\.wasm$/,
				type: 'webassembly/experimental'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.wasm', '.js']
	}
};
