const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const publidDir = path.join(__dirname, '/public');
module.exports = [
  {
    entry: [
      './src/index.jsx',
    ],
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publidDir,
    },
  },
  {
    mode: 'development',
    entry: {
      style: './stylesheets/index.scss',
    },
    output: {
      path: publidDir,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'bundle.css' })],
  },
];
