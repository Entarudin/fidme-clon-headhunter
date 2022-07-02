import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform } from 'class-transformer';
import { formatDate } from 'src/foundation/constants/date';

export type BasicDocument = Basic & Document;

@Schema()
export class Basic {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ default: formatDate })
  createdAt: string;

  @Prop({ default: formatDate })
  updatedAt: string;
}

export const BasicSchema = SchemaFactory.createForClass(Basic);
