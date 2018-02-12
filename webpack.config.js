const path = require('path');

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      /* ... */
      {
        test: /\.jsx$/, // absolute path to component
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/, // absolute path to component
        loaders: ["style-loader","css-loader","sass-loader"]
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: "./public",
    port:3000

    // colors: true,
    // historyApiFallback: true,
    // inline: true
  },
  devtool: 'eval-source-map',
  resolve:{
    extensions: [' ','.js', '.jsx']
  }
};
