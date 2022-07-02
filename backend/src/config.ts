import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';
// eslint-disable-next-line @typescript-eslint/no-var-requires

export const MongoDBConfig = (
  configService: ConfigService,
): MongooseModuleOptions => ({
  uri: configService.get('MONGODB_CONNECTION'),
});
