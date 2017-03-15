const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions:['.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader?cacheDirectory'],
        include: PATHS.app
      }
    ]

  }
};

if(TARGET === 'start' || !TARGET){
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      //progress: true,

      stats: 'errors-only',

      //localhost
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    //  new NpmInstallPlugin({
    //    save: true // same as --save
    //  })
    ]
  });
}
if(TARGET === 'build'){
  module.exports = merge(common, {});
}
