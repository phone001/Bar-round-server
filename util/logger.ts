import * as winston from 'winston';
import { WinstonModule, utilities } from 'nest-winston';
import { loggerFormat } from './format/text-format';

export const Logger = WinstonModule.createLogger({
    transports: [
        new winston.transports.Console({
          level: process.env.NODE_ENV === 'production' ? 'info' : 'silly',
          format: winston.format.combine(winston.format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),loggerFormat)
        }),
      ],
    })

