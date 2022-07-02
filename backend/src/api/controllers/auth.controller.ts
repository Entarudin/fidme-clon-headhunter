import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/core/services/auth.servise';
import { TokensType } from 'src/docs/swagger/authController/tokens-types';
import { createUserDto } from 'src/dtos/create-user.dto';
import { refreshTokensUserDto } from 'src/dtos/refresh-token.dto';
import { NotFoundResponse } from 'src/dtos/types';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Login in' })
  @ApiResponse({
    status: 200,
    description: 'The user has successfully logged in.',
    type: [TokensType],
  })
  @ApiResponse({
    status: 404,
    description: 'Login in error.',
    type: NotFoundResponse,
  })
  @Post('/login')
  login(@Body() userDto: createUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: 'Registration' })
  @ApiResponse({
    status: 200,
    description: 'The user registered successfully.',
    type: [TokensType],
  })
  @ApiResponse({
    status: 404,
    description: 'Registration error.',
    type: NotFoundResponse,
  })
  @Post('/registration')
  registration(@Body() userDto: createUserDto) {
    return this.authService.registration(userDto);
  }

  @ApiOperation({ summary: 'Replacement of expired tokens' })
  @ApiResponse({
    status: 200,
    description: 'The user has successfully changed tokens',
    type: [TokensType],
  })
  @ApiResponse({
    status: 404,
    description: 'Change tokens error.',
    type: NotFoundResponse,
  })
  @Post('/refresh')
  refreshUser(@Body() refreshDto: refreshTokensUserDto) {
    return this.authService.refreshUser(refreshDto);
  }

  @ApiOperation({ summary: 'Logout' })
  @ApiResponse({
    status: 200,
    description: 'The user logged out successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Logout error.',
    type: NotFoundResponse,
  })
  @Post('/logout')
  logout(@Body() refreshDto: refreshTokensUserDto) {
    return this.authService.logout(refreshDto);
  }
}
