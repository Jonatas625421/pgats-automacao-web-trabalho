const webpack = require('webpack');

module.exports = {
  mode: 'development',
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      util: require.resolve('util/'),
      events: require.resolve('events/'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
