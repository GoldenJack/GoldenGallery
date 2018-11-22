let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/js/index.js',
        './src/assets/scss/app.scss'
    ],
    output: {
        path: path.resolve(__dirname, './public/'),
		filename: 'js/bundle.js'
    },

    devServer: {
        contentBase: './public',
        port: 8000
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
				loader: 'babel-loader'
            },
            {
				test: /\.(sass|scss)$/,
				include: path.resolve(__dirname, 'src/assets/scss'),
				use: ExtractTextPlugin.extract({
					use: [{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							minimize: true
						}
                    },
                    {
						loader: 'resolve-url-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}]
				})
            },
            {
				test: /\.(png|jpg|gif|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: './img/[name].[ext]'
					}
				}
			},
			{
				test: /\.(woff|woff2|ttf|otf|eot)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: './img/[name].[ext]'
					}
				}
			},
        ]
    },
    plugins: [
		new ExtractTextPlugin({
			filename: './css/app.min.css',
			allChunks: true
        }),
        new CopyWebpackPlugin([
			{
				from: './src/assets/img',
				to: './img'
			},
			{
				from: './src/assets/fonts',
				to: './fonts'
			}
		]),
		new HtmlWebpackPlugin({
			title: 'home',
			filename: 'home.html',
			template: './src/assets/html/home.html'
		}),
		new HtmlWebpackPlugin({
			title: 'index',
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	resolve: {
		alias: {
		  atoms: path.resolve(__dirname, 'src/js/ui/atoms'),
		  molecules: path.resolve(__dirname, 'src/js/ui/molecules'),
		  organisms: path.resolve(__dirname, 'src/js/ui/organisms')
		}
	},
    devtool: "source-map"
}