import { ApiProperty } from '@nestjs/swagger';

export class updateUserDto {
  @ApiProperty()
  readonly name: string;
}
