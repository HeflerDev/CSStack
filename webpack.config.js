const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production',
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
