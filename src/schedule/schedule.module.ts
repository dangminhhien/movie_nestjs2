import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Schedule, ScheduleSchema } from '../schema/schedule.schema';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Schedule.name, schema: ScheduleSchema }]),
  ],
  controllers: [ScheduleController],
  providers: [ScheduleService],
  exports: [ScheduleService], // Export ScheduleService if needed in other modules
})
export class ScheduleModule {}
