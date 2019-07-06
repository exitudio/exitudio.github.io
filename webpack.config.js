var path = require('path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: {
    index: path.join(__dirname, './app/'),
  },
  /* [
    './app/index.js'
  ], */
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
        query: {
          presets: [
            'react',
            [
              'es2015',
              {
                "modules": false //<< Tree shaking
              }
            ],
            'stage-2',
            
          ],
          plugins: ['transform-class-properties','transform-decorators-legacy']
        }
      },{
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
      },{ 
          test: /\.(png|jpg)$/, 
          loader: 'url-loader?limit=8192' }
    ]
  },
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/doc',
    filename: '[name].bundle.js',
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    HTMLWebpackPluginConfig,
  ]
}