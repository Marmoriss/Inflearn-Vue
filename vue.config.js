module.exports = {
  devServer: {
    Proxy: {
      '/': {
        target: 'http://localhost:5173',
      },
    },
  },
};
