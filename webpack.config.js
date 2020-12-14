const path = require('path');
const webpack = require('webpack');
const CWD = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {test:'/\.(js|jsx)$/', use: 'babel-loader'},
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: require.resolve('file-loader'),
              limit: 8192,
              esModule: false,
            },
          },
        ],
      },
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({template:'./src/index.html'}),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(CWD, './src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
}
