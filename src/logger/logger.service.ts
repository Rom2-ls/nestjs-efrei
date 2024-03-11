import { Injectable } from '@nestjs/common';
import { LogLevel } from './logger.enum';

@Injectable()
export class LoggerService {
  constructor(private logLevel: LogLevel) {}

  log(logLevel: LogLevel, message: string) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${logLevel.toUpperCase()}]: ${message}`);
  }

  debug(message: string) {
    this.log(LogLevel.DEBUG, message);
  }

  info(message: string) {
    this.log(LogLevel.INFO, message);
  }

  warn(message: string) {
    this.log(LogLevel.WARN, message);
  }

  error(message: string) {
    this.log(LogLevel.ERROR, message);
  }
}
