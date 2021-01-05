const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: { 
    filename: 'app.js',
    path: path.resolve( __dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ]
      }
    ]
  }
};
