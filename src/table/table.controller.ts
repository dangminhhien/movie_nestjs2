import { Controller, Get, Render } from '@nestjs/common';
import { LogService } from '../log/log.service';

@Controller('table')
export class TableController {
  constructor(private readonly logService: LogService) {}

  @Get()
  @Render('table')
  async showLogs() {
    const logs = await this.logService.findAll(); // Hàm findAll() phải được định nghĩa trong LogService để lấy tất cả các bản ghi log
    return { logs };
  }
}
