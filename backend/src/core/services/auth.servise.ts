import {
  HttpException,
  HttpStatus,
  Injectable,
  Scope,
  UnauthorizedException,
} from '@nestjs/common';
import { createUserDto } from '../../dtos/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { UsersService } from './user.servise';
import { TokenService } from './tokens.service';
import { User } from 'src/domain/user/user.schema';
import { refreshTokensUserDto } from 'src/dtos/refresh-token.dto';
import { ValidationException } from 'src/foundation/exception/validation.exception';

@Injectable({ scope: Scope.REQUEST })
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly tokenService: TokenService,
  ) {}

  async login(userDto: createUserDto) {
    const user = await this.validateUser(userDto);

    const tokens = this.tokenService.generateTokens(user);
    await this.tokenService.saveTokenOnUser(
      user._id,
      (
        await tokens
      ).refreshToken,
      (
        await tokens
      ).accessToken,
    );

    return tokens;
  }

  async registration(userDto: createUserDto) {
    if (userDto.name.length === 0 || typeof userDto.name !== 'string') {
      throw new ValidationException('Invalid name');
    }

    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        'User with this email exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(userDto.password, 7);
    const user: User = await this.userService.create({
      ...userDto,
      password: hashPassword,
    });

    const tokens = this.tokenService.generateTokens(user);
    await this.tokenService.saveTokenOnUser(
      user._id,
      (
        await tokens
      ).refreshToken,
      (
        await tokens
      ).accessToken,
    );

    return tokens;
  }

  async refreshUser(dto: refreshTokensUserDto) {
    if (!dto.refresh) {
      throw new UnauthorizedException();
    }

    const userData = this.tokenService.validateRefreshToken(dto.refresh);
    const tokenFromDb = await this.tokenService.findToken(
      dto.userId,
      dto.refresh,
    );

    if (!userData || !tokenFromDb) {
      throw new UnauthorizedException();
    }
    const user = await this.userService.getUserById(userData.id);
    const tokens = this.tokenService.generateTokens(user);
    await this.tokenService.removeToken(userData.id, dto.refresh);
    await this.tokenService.saveTokenOnUser(
      userData.id,
      (
        await tokens
      ).refreshToken,
      (
        await tokens
      ).accessToken,
    );
    return tokens;
  }

  private async validateUser(userDto: createUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEquals: boolean = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Invalid email address or password',
    });
  }
  async logout(dto: refreshTokensUserDto) {
    const result = await this.tokenService.removeToken(dto.userId, dto.refresh);
    return result;
  }
}
