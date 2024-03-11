import { Module, DynamicModule } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LogLevel } from './logger.enum';

@Module({})
export class LoggerModule {
  static forRoot(logLevel: LogLevel): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LoggerService,
          useFactory: () => new LoggerService(logLevel),
        },
      ],
      exports: [LoggerService],
    };
  }
}
