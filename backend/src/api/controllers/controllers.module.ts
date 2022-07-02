import { VacanciesController } from './vacancy.controller';
import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { UsersController } from '../controllers/user.controller';
import { AuthController } from './auth.controller';
import { ConversationController } from './conversation.controller';
import { MessageController } from './message.controller';
import { ProfileController } from './profile.controller';

@Module({
  imports: [CoreModule],
  controllers: [
    UsersController,
    AuthController,
    MessageController,
    ConversationController,
    ProfileController,
    VacanciesController,
  ],
})
export class ControllersModule {}
