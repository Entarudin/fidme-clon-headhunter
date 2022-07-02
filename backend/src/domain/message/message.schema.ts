import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Basic } from '../basic.schema';

export type MessageDocument = Message & Document;

@Schema()
export class Message extends Basic {
  @ApiProperty()
  @Prop()
  conversationId: string;

  @ApiProperty()
  @Prop()
  sender: string;

  @ApiProperty()
  @Prop()
  text: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
