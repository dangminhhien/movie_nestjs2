import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Schedule, ScheduleSchema } from '../schema/schedule.schema';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { MovieModule } from 'src/movie/movie.module';
import { LocalModule } from 'src/local/local.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Schedule.name, schema: ScheduleSchema }]),
    MovieModule,
    LocalModule, // Assuming LocalModule is imported and configured elsewhere
  ],
  controllers: [ScheduleController],
  providers: [ScheduleService],
  exports: [ScheduleService], // Export ScheduleService if needed in other modules
})
export class ScheduleModule {}