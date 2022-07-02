import { ApiProperty } from '@nestjs/swagger';

export class CreateProfilesDto {
  @ApiProperty({ description: 'common field' })
  readonly fieldOfActivity: string;

  @ApiProperty({ description: 'student field' })
  readonly dateOfBirth: string;

  @ApiProperty({ description: 'student field' })
  readonly education: string;

  @ApiProperty({ description: 'student field' })
  readonly additionalEducation: string;

  @ApiProperty({ description: 'student field' })
  readonly averageScore: string;

  @ApiProperty({ description: 'student field' })
  readonly technologyStack: string;

  @ApiProperty({ description: 'student field' })
  readonly hardSkills: string;

  @ApiProperty({ description: 'student field' })
  readonly softSkills: string;

  @ApiProperty({ description: 'student field' })
  readonly сareerObjective: string;

  @ApiProperty({ description: 'student field' })
  readonly schedule: string;

  @ApiProperty({ description: 'student field' })
  readonly workPlace: string;

  @ApiProperty({ description: 'student field' })
  readonly foreignLanguages: string;

  @ApiProperty({ description: 'student field' })
  readonly interests: string;

  @ApiProperty({ description: 'student field' })
  readonly portfolio: string;

  @ApiProperty({ description: 'student field' })
  readonly achievements: string;

  @ApiProperty({ description: 'company field' })
  readonly learningOpportunity: string;

  @ApiProperty({ description: 'company field' })
  readonly aboutCompany: string;

  @ApiProperty({ description: 'company field' })
  readonly aboutProjects: string;

  @ApiProperty({ description: 'company field' })
  readonly abilityToWorkRemotely: string;
}
