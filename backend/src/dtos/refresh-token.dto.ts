import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class refreshTokensUserDto {
  @ApiProperty({ type: String })
  readonly userId: ObjectId;

  @ApiProperty()
  readonly refresh: string;

  @ApiProperty()
  readonly access: string;
}
