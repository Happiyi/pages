module.exports = {
  apps: [
    {
      name: 'show.pages.oa.com',
      script: './lib/app.js',
      output: './logs/out.log',
      error: './logs/error.log',
      env: {
        NODE_ENV: 'production'
      },
      watch: false
    },
    {
      name: 'show.pages.oa.com',
      script: './lib/app.js',
      output: './logs/out.log',
      error: './logs/error.log',
      env: {
        NODE_ENV: 'staging'
      },
      watch: false
    }
  ]
};
