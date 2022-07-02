import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Basic } from '../basic.schema';

export type VacancyDocument = Vacancy & Document;

@Schema()
export class Vacancy extends Basic {
  @ApiProperty()
  @Prop()
  fieldOfActivity: string;

  @ApiProperty()
  @Prop()
  vacancyName: string;

  @ApiProperty()
  @Prop()
  skills: string;

  @ApiProperty()
  @Prop()
  requirements: string;

  @ApiProperty()
  @Prop()
  schedule: string;

  @ApiProperty()
  @Prop()
  workFormat: string;

  @ApiProperty()
  @Prop()
  salary: string;

  @ApiProperty()
  @Prop()
  offer: string;

  @ApiProperty()
  @Prop()
  companyId: string;
}

export const VacancySchema = SchemaFactory.createForClass(Vacancy);
