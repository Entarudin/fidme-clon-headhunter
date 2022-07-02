/* eslint-disable @typescript-eslint/ban-types */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import * as mongoose from 'mongoose';
import { Basic } from '../basic.schema';

export type UserDocument = User & Document;

@Schema()
export class User extends Basic {
  @ApiProperty()
  @Prop({ required: true })
  name: string;

  @ApiProperty()
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty()
  @Exclude()
  @Prop({ required: true })
  password: string;

  @ApiProperty()
  @Prop({ required: true })
  role: string;

  @ApiProperty()
  @Prop({ type: Object })
  profile: Object;

  @ApiProperty()
  @Exclude()
  @Prop({
    type: [
      {
        access: { type: mongoose.Schema.Types.String },
        refresh: { type: mongoose.Schema.Types.String },
      },
    ],
  })
  tokens: { access: string; refresh: string }[];
}

export const UserSchema = SchemaFactory.createForClass(User);
