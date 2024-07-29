import { Module } from '@nestjs/common';
import { HistoryController } from './history.controller';
import { ScheduleService } from '../schedule/schedule.service';
import { LocalService } from '../local/local.service';
import { LogModule } from '../log/log.module'; // Đảm bảo đường dẫn đúng

@Module({
  imports: [LogModule], // Nhúng LogModule
  controllers: [HistoryController],
  providers: [ScheduleService, LocalService],
})
export class HistoryModule {}
