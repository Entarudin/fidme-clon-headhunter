import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty()
  readonly conversationId: string;

  @ApiProperty()
  readonly sender: string;

  @ApiProperty()
  readonly text: string;
}
