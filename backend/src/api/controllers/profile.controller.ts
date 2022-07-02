import {
  Body,
  Controller,
  Param,
  UseInterceptors,
  UploadedFile,
  Put,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { ProfileService } from 'src/core/services/profile.service';
import { User } from 'src/domain/user/user.schema';
import { CreateProfilesDto } from 'src/dtos/create-profiles.dto';
import { NotFoundResponse } from 'src/dtos/types';
import MongooseClassSerializerInterceptor from '../inteseptors/mongooseClassSerializer.interceptor';

@Controller('profile')
@ApiTags('profile')
@UseInterceptors(MongooseClassSerializerInterceptor(User))
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @ApiOperation({ summary: 'Update profile user' })
  @ApiResponse({
    status: 200,
    description: 'The profile user will upate successfully.',
    type: [User],
  })
  @ApiResponse({
    status: 404,
    description: 'Update profile user error.',
    type: NotFoundResponse,
  })
  @UseInterceptors(FileInterceptor('profileImage'))
  @Put('/:id')
  create(
    @Body() dto: CreateProfilesDto,
    @Param('id') id: ObjectId,
    @UploadedFile() profileImage,
  ) {
    return this.profileService.create(dto, id, profileImage);
  }
  @ApiOperation({ summary: 'find profile user' })
  @Get('/:id')
  findProfile(@Param('id') id: string) {
    return this.profileService.getProfileUserById(id);
  }
}
