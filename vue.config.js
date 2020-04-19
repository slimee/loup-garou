module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
      proxy: {
        '/socket.io': { target: 'http://localhost:3000' },
      },
    },
  },
}