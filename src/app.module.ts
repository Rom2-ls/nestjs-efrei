import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoggerModule } from './logger/logger.module';
import { LogLevel } from './logger/logger.enum';
import { HeaderMiddleware } from './middleware/header.middleware';

@Module({
  imports: [UsersModule, LoggerModule.forRoot(LogLevel.DEBUG)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HeaderMiddleware).forRoutes('*');
  }
}
