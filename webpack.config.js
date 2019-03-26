const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve('src/index.js'),
  mode: 'production',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve('src/theme')
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/theme.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?.$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: true,
                    grid: true,
                    browsers: ['last 2 versions', 'iOS >= 8', 'Safari >= 8']
                  }
                })
              ]
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
}
