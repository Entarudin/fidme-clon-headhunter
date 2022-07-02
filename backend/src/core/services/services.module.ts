import { VacancyService } from './vacancy.service';
import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { UsersService } from './user.servise';
import { AuthService } from './auth.servise';
import { TokenService } from './tokens.service';
import { MessageService } from './message.service';
import { ConversationService } from './conversation.service';
import { ProfileService } from './profile.service';
import { FileService } from './file.service';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [
    UsersService,
    AuthService,
    TokenService,
    MessageService,
    ConversationService,
    ProfileService,
    FileService,
    VacancyService,
  ],
  exports: [
    UsersService,
    AuthService,
    TokenService,
    MessageService,
    ConversationService,
    ProfileService,
    FileService,
    VacancyService,
  ],
})
export class ServicesModule {}
