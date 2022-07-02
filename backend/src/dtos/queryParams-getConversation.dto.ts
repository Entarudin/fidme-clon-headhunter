import { ApiProperty } from '@nestjs/swagger';

export class QueryParamsConversation {
  @ApiProperty()
  readonly firstUserId: string;

  @ApiProperty()
  readonly secondUserId: string;
}
