import * as winston from 'winston'

export const loggerFormat = winston.format.printf(({ level, message, timestamp, context })=>{
    return `[${timestamp}] ${level} [${context}] : ${message}`;
});
