import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { loggerFormat } from 'util/format/text-format';

export const LoggerModule = WinstonModule.forRoot({
    transports:[new winston.transports.Console({format:winston.format.combine(winston.format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),loggerFormat)})]
  })