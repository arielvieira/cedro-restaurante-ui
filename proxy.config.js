const proxy = [
    {
      context: '/api',
      target: 'http://localhost:51270/api',
      pathRewrite: {'^/api' : ''}
    }
  ];

module.exports = proxy;