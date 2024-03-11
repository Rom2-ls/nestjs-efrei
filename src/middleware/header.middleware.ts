import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class HeaderMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.setHeader('X-Custom-Header', 'Hello from Custom Header Middleware');
    Logger.debug(
      'Custom Header Middleware has set a custom header on the response.',
    );
    next();
  }
}
