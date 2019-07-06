var path = require('path')
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: {
    index: path.join(__dirname, './app/'),
    vendor: ['react', 'react-dom', 'react-router'],
  },
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
          plugins: ['transform-class-properties', 'transform-decorators-legacy']
        }
      }, {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  output: {
    path: __dirname + '/doc',
    chunkFilename: '[name].bundle.js',
    filename: '[name].bundle.js',
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.optimize.ModuleConcatenationPlugin(), //scope hoisting
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // Specify the common bundle's name.
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
      },
      sourceMap: false,
      comments: false,
      minimize: true,
    })
  ]
}