module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
  devServer: {
    proxy: {
      '/': { target: 'http://localhost:3000' },
    },
  },
}