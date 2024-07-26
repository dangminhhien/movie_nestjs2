import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { Schedule, ScheduleSchema } from '../schema/schedule.schema';
import { MovieService } from '../movie/movie.service';  // Ensure this path is correct
import { LocalService } from '../local/local.service';  // Ensure this path is correct
import { MovieModule } from 'src/movie/movie.module';
import { LocalModule } from 'src/local/local.module';
import { LocalController } from 'src/local/local.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Schedule.name, schema: ScheduleSchema }]),
    // Import any other modules required for MovieService and LocalService
    LocalModule
  ],
  controllers: [ScheduleController, LocalController],
  providers: [
    ScheduleService,
    MovieService,  // Ensure MovieService is included here if used in the controller
    LocalService,  // Ensure LocalService is included here if used in the controller
  ],
})
export class ScheduleModule {}