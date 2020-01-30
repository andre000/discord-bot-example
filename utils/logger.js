const winston = require('winston');
require('winston-daily-rotate-file');

const errorTransport = new (winston.transports.DailyRotateFile)({
  filename: 'logs/error-%DATE%.log',
  level: 'error',
  datePattern: 'YYYY-MM-DD-HH',
  maxSize: '2m',
  maxFiles: '4d',
});

const infoTransport = new (winston.transports.DailyRotateFile)({
  filename: 'logs/info-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  maxSize: '1m',
  maxFiles: '2d',
});

module.exports = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  defaultMeta: { service: 'discord-bot' },
  transports: [
    errorTransport,
    infoTransport,
    ...[process.env.NODE_ENV !== 'production'
      ? new winston.transports.Console()
      : [],
    ],
  ],
});
