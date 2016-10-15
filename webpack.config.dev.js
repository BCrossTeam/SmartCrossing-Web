import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/',
    publicPath: '/'
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
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js' ]
  }
}
