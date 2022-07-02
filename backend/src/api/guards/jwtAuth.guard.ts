import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  private readonly secretAccesToken = String(
    this.configService.get('JWT_ACCESS_SECRET'),
  );

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      const authHeader = request.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({
          message: 'You are not authorized for selected action',
        });
      }

      request.user = jwt.verify(token, this.secretAccesToken);
      return true;
    } catch (e) {
      throw new UnauthorizedException({
        message: 'You are not authorized for selected action',
      });
    }
  }
}
