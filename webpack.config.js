var IS_DEV = (process.env.NODE_ENV == 'development') ? true : false;

var webpack = require('webpack');

if(IS_DEV){
  var WebpackNotifierPlugin = require('webpack-notifier');
}

module.exports = {
  entry: (IS_DEV) ? [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    "./src/main.js"
  ] : ["./src/main.js"],
  output: {
    path: __dirname + "/www",
    filename: "js/app.js",
    publicPath: '/'
  },
  devtool: (IS_DEV) ? "source-map" : '',
  module: {
    loaders: [
      { test: /\.css$/, loaders: ["style", "css"] },
      { test: /\.scss$/,
        loaders: (IS_DEV)
          ? ["style", "css?sourceMap", "sass?sourceMap"]
          : ["style", "css", "sass"]
      },

      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },

      { test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loaders: (IS_DEV) ? ['react-hot', 'babel'] : ['babel']
      },
      { test: /\.(json)$/,
        exclude: /(node_modules)/,
        loaders: ['json']
      }
    ]
  },
  resolve: {
    alias: {
      'data': __dirname + '/src/data',
      'sass': __dirname + '/src/sass',
      'components': __dirname + '/src/components',
      'reducers': __dirname + '/src/reducers',
      'actions': __dirname + '/src/actions',
      'pages': __dirname + '/src/pages',
      'helpers': __dirname + '/src/helpers'
    }
  },
  plugins: (IS_DEV) ? [
    new WebpackNotifierPlugin({alwaysNotify: true}),
    new webpack.HotModuleReplacementPlugin()
  ] : [],
  devServer: {
    hot: true,
    historyApiFallback: true,
    publicPath: '/',
    contentBase: 'www'
  }
};