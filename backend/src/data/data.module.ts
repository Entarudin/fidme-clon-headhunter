import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User, UserSchema } from '../domain/user/user.schema';
import { Vacancy, VacancySchema } from '../domain/vacancy/vacancy.schema';
import {
  Conversation,
  ConversationSchema,
} from 'src/domain/conversation/conversation.schema';
import { Message, MessageSchema } from 'src/domain/message/message.schema';
import { MongoDBConfig } from '../config';
import { formatDate } from 'src/foundation/constants/date';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: MongoDBConfig,
    }),
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;
          schema.pre<User>('save', function (next) {
            const currentDate = formatDate;
            this.updatedAt = currentDate;
            next();
          });
          return schema;
        },
      },
    ]),

    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Conversation.name, schema: ConversationSchema },
      { name: Message.name, schema: MessageSchema },
      { name: Vacancy.name, schema: VacancySchema },
    ]),
  ],

  exports: [MongooseModule],
})
export class DataModule {}
