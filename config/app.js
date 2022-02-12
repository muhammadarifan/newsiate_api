const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  version: '1.0.0',
  canonical_url: process.env.APPLICATION_ROOT,
  app: {
    app_name: process.env.APP_NAME || 'Newsiate',
    app_env: process.env.APP_ENV || 'development',
    app_key: process.env.APP_KEY || 'secret',
    app_debug: process.env.APP_DEBUG || false,
    app_url: process.env.APP_URL || 'http://newsiate.test',
    app_url_api: process.env.APP_URL_API || 'http://newsiate.test/api',
    app_port: process.env.APP_PORT || '3000',
  }
};