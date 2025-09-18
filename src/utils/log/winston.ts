import winston from 'winston';
import os from 'os';
import { envConfig } from '../../config/congifs';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
  silly: 4,
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'blue',
  debug: 'green',
  silly: 'magenta',
};

winston.addColors(colors);

const instancePrefix = os.hostname();

const logger = winston.createLogger({
  level: envConfig.logLevel,
  levels,
  defaultMeta: { service: 'system' },
  transports: [
    new winston.transports.Console({
      silent: !['local', 'dev'].includes(envConfig.env),
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ timestamp, level, message, service, childService, ...meta }) => {
          const serviceName = childService || service;
          const metaString = Object.keys(meta || {}).length > 0 ? JSON.stringify(meta) : '';
          return `${timestamp} [${level} - ${serviceName}]: ${message} ${metaString}`;
        }),
      ),
    }),
  ],
});

const authLogger = logger.child({ childService: 'auth' });
const profileLogger = logger.child({ childService: 'profile' });

export { logger, authLogger, profileLogger };
