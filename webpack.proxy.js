const merge = require('webpack-merge');
const common = require('./webpack.config.js');

// noinspection JSUnusedGlobalSymbols
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: '8000',
    proxy: {
      '/api':{
        target: 'localhost:3000',
        changeOrigin: true,
        secure: false
      },
    },
    after(app) {
      app.get('*', (req, res) => {
        // supports routes
        req.url = '/index.html';
        // noinspection JSAccessibilityCheck
        app.handle(req, res);
      });
    }
  }
});
