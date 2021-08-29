const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  devtool: "eval-source-map",
  target: 'node', // without webpack renames 'global'
  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'cjsGlobalBundled.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
