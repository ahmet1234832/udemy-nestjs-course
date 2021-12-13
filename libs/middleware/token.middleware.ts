import {
  GatewayTimeoutException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authJsonWebToken = req.headers.authorization;
    if (req.baseUrl !== '/api/login') {
      if (!authJsonWebToken) {
        throw new UnauthorizedException(
          'You are not auhtorized to access this route',
        );
      } else {
        try {
          const user = jwt.verify(
            authJsonWebToken.slice(7, authJsonWebToken.length),
            'highwaytohell',
          );
          if (user) {
            req['user'] = user;
            next();
          } else {
            throw new GatewayTimeoutException('Something went wrong');
          }
        } catch (error) {
          throw new UnauthorizedException(error.message);
        }
      }
    } else {
      return next();
    }
  }
}
