import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogService } from './log.service';
import { LogSchema, LOG_MODEL_NAME } from '../schema/log.schema';
import { ScheduleModule } from 'src/schedule/schedule.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: LOG_MODEL_NAME, schema: LogSchema }]), // Use the constant here
  ],
  providers: [LogService],
  exports: [LogService],
})
export class LogModule {}
