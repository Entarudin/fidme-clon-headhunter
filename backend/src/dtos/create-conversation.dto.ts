import { ApiProperty } from '@nestjs/swagger';

export class CreateConversationDto {
  @ApiProperty()
  readonly senderId: string;

  @ApiProperty()
  readonly receiverId: string;
}
