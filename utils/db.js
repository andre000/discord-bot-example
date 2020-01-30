const sqlite3 = require('sqlite3').verbose();
const logger = require('./logger');

try {
  logger.info('Connecting to database...');
  module.exports = new sqlite3.Database('db/main.db');
} catch (err) {
  logger.error(err);
}
