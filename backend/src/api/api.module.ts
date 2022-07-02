import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { FiltersModule } from './filters/filters.module';
import { PipesModule } from './pipes/pipes.module';

@Module({
  imports: [ControllersModule, FiltersModule, PipesModule],
  exports: [ControllersModule, FiltersModule, PipesModule],
})
export class ApiModule {}
