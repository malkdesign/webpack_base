const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test:/\.sass/,
        use:[
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              url: true,
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              url: true,
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        loader: "url-loader"
      }
   ]
  }
}
