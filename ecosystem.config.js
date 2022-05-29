module.exports = {
  apps: [
    {
      name: 'ssiProxy',
      script: './proxy.js',
      instances: 1,
      autorestart: false,
      watch: false,
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
