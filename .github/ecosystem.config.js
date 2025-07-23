module.exports = {
  apps: [
    {
      name: 'backend',
      script: './backend/server.js',
      env: {
        NODE_ENV: 'production',
        PORT: 5000,
      },
    },
  ],
};
