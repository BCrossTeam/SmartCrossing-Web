var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtools: 'eval-source-map',
  entry: './client/index.js',
  output: {
    path: '/',
    publicPath: '/server/public'
  },
  plugins: [
   new webpack.ProvidePlugin({
     $: "jquery",
     jQuery: "jquery"
   })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  resolve: {
    extensions: [ '', '.js' ]
  },
  watch: true
}
