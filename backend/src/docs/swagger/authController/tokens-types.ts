import { ApiProperty } from '@nestjs/swagger';

export class TokensType {
  @ApiProperty()
  access: string;

  @ApiProperty()
  refresh: string;
}
