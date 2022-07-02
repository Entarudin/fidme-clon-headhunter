import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly configService: ConfigService,
    private reflector: Reflector,
  ) {}

  private readonly secretAccesToken = String(
    this.configService.get('JWT_ACCESS_SECRET'),
  );

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      const requiredRoles = this.reflector.getAllAndOverride('roles', [
        context.getHandler(),
        context.getClass(),
      ]);

      if (!requiredRoles) {
        return true;
      }
      const authHeader = request.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({
          message: 'You are not authorized for selected action',
        });
      }

      const user = jwt.verify(token, this.secretAccesToken);
      request.user = user;

      return requiredRoles.some((role) => user.role?.includes(role));
    } catch (e) {
      throw new ForbiddenException({ message: 'No access-' });
    }
  }
}
