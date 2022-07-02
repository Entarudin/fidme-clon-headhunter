import { ApiProperty } from '@nestjs/swagger';

export class UpdateMessageDto {
  @ApiProperty()
  readonly text: string;
}
