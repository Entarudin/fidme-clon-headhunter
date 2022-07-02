import {
  Body,
  Controller,
  Param,
  Get,
  Put,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { UsersService } from 'src/core/services/user.servise';
import { User } from 'src/domain/user/user.schema';
import { NotFoundResponse } from 'src/dtos/types';
import { updateUserDto } from 'src/dtos/update-user.dto';
import MongooseClassSerializerInterceptor from '../inteseptors/mongooseClassSerializer.interceptor';

@Controller('user')
@UseInterceptors(MongooseClassSerializerInterceptor(User))
@ApiTags('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: 'Get user on params' })
  @ApiResponse({
    status: 200,
    description: 'The user will find successfully.',
    type: [User],
  })
  @ApiResponse({
    status: 404,
    description: 'Find user error.',
    type: NotFoundResponse,
  })
  @Get(':id')
  getUser(@Param('id') id: ObjectId) {
    return this.userService.getUserById(id);
  }

  @ApiOperation({ summary: 'Get companies' })
  @ApiResponse({
    status: 200,
    description: 'The users will find successfully.',
    type: [User],
  })
  @ApiResponse({
    status: 404,
    description: 'Find users error.',
    type: NotFoundResponse,
  })
  @Get('/company/find_companies/')
  findCompanies() {
    return this.userService.getCompanies();
  }

  @ApiOperation({ summary: 'Update user ' })
  @ApiResponse({
    status: 200,
    description: 'The user will update successfully.',
    type: [User],
  })
  @ApiResponse({
    status: 404,
    description: 'Update user error.',
    type: NotFoundResponse,
  })
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: updateUserDto) {
    return this.userService.update(id, dto);
  }

  @ApiOperation({ summary: 'Delete user ' })
  @ApiResponse({
    status: 200,
    description: 'The user successfully deleted.',
    type: [User],
  })
  @ApiResponse({
    status: 404,
    description: 'Delete user error.',
    type: NotFoundResponse,
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
