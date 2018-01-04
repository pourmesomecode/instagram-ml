const webpack = require('webpack');
const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src')
}

const client = {
  entry: [
    'babel-polyfill',
    'react',
    'react-dom',
    PATHS.client,
  ],
  output: {
    path: PATHS.public,
    filename: 'bundle.js',
  },
  target: 'web',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor-bundle',
      filename: 'vendor-bundle.js',
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
  ]
};