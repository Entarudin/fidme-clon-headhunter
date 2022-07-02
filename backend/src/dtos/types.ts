import { ApiProperty } from '@nestjs/swagger';

export class NotFoundResponse {
  @ApiProperty()
  status: number;

  @ApiProperty()
  success: boolean;

  @ApiProperty()
  error: string;

  @ApiProperty({ type: [String] })
  message: string | string[];

  @ApiProperty()
  time: string;
}
