const path = require('path');

module.exports = {
  entry: {
    app: ['./app/frontend/src/app.js'],
  },
  output: {
    path: path.join(__dirname, './public/build'),
    filename: 'bundle.js',
  },
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  devtool: '#source-map',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/,
      query: {
        presets: ['react', 'env', 'stage-0', 'stage-1', 'stage-2'],
      },
    },
    {
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(jpe?g|png|gif)$/,
      loaders: ['file-loader'],
    },
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff',
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    },
    ],
  },
};
