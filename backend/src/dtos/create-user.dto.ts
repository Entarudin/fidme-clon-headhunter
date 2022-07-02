import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty, Length } from 'class-validator';

export class createUserDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Invalid email address. E.g. example@email.com' })
  readonly email: string;

  @ApiProperty()
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @Length(7, 16, { message: 'Not less than 7 and not more than 16' })
  readonly password: string;

  @ApiProperty()
  readonly role: string;
}
