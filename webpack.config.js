require('dotenv').config();

module.exports = {
  mode: process.env.DEV ? 'development' : 'production',
  entry: {
    bundle: __dirname + '/client/index.js',
    popup: __dirname + '/client/popup/index.js',
  },
  output: {
    path: __dirname,
    filename: './public/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
