import { ApiProperty } from '@nestjs/swagger';

export class CreateVacancyDto {
  @ApiProperty()
  readonly fieldOfActivity: string;

  @ApiProperty()
  readonly vacancyName: string;

  @ApiProperty()
  readonly skills: string;

  @ApiProperty()
  readonly requirements: string;

  @ApiProperty()
  readonly schedule: string;

  @ApiProperty()
  readonly workFormat: string;

  @ApiProperty()
  readonly salary: string;

  @ApiProperty()
  readonly offer: string;

  @ApiProperty()
  readonly companyId: string;
}
