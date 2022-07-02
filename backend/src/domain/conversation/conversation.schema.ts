import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Basic } from '../basic.schema';

export type ConversationDocument = Conversation & Document;

@Schema()
export class Conversation extends Basic {
  @ApiProperty()
  @Prop()
  members: string[];
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
