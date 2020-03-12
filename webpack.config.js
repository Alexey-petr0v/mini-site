const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, "src"),
    dist: path.resolve(__dirname, "dist"),
}

module.exports = {
  entry: PATHS.src + "/index.js",
  output: {
    path: PATHS.dist,
    filename: "bundle.js",
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: PATHS.src + '/index.pug',
          filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: PATHS.src + '/page.pug',
        filename: 'page.html'
    })
    ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
            pretty: true
        }
      }
    ]
  }
}