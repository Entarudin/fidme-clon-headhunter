import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DataModule } from './data/data.module';
import { FoundationModule } from './foundation/foundation.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
    }),
    ApiModule,
    DataModule,
    FoundationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
