// Don't use ES6 here to stay compatible with ESLint plugins

const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            'presets': ['flow', ['es2015', { 'modules': false }], 'stage-2'],
            'plugins': [
              'static-fs',
              'transform-runtime',
              'transform-decorators-legacy',
              'transform-class-properties'
            ]
          }
        }]
      },
      {
        test: /\.(png|ico|jpg|xml)$/,
        use: 'url-loader?name=[hash].[ext]&limit=10000'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?name=./assets/[hash].[ext]&limit=10000'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader?name=./assets/[hash].[ext]'
      },
    ]
  },
  resolve: {
    modules: [path.join(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  //   new webpack.LoaderOptionsPlugin({ minimize: true })
  // ],
  watchOptions: {
    ignored: /build/
  },
  node: {
    fs: 'empty'
  },
  bail: true
};
