const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      },
      {
        test: /\.(sass|scss)$/,
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
      organisms: path.resolve(__dirname, 'src/js/ui/organisms'),
      templates: path.resolve(__dirname, 'src/js/ui/templates'),
      pages: path.resolve(__dirname, 'src/js/ui/pages'),
      features: path.resolve(__dirname, 'src/js/features'),
      constants: path.resolve(__dirname, 'src/js/constants'),
      utils: path.resolve(__dirname, 'src/js/utils'),
      data: path.resolve(__dirname, 'src/js/data'),
      store: path.resolve(__dirname, 'src/js/store'),
      img: path.resolve(__dirname, 'src/assets/img'),
      HOC: path.resolve(__dirname, 'src/js/HOC'),
      services: path.resolve(__dirname, 'src/js/services/')
    }
  },
  devtool: 'source-map'
};
