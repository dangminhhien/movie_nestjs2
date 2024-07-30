import { Controller, Get, Render, Req } from '@nestjs/common';
import { LogService } from '../log/log.service';
import { Request } from 'express';


@Controller('table')
export class TableController {
  constructor(private readonly logService: LogService) {}

  @Get()
  @Render('table')
  async showLogs(@Req() req: Request) {
    const username = (req as any).session?.username;
    const userId = (req as any).session?.userId; // Assuming `userId` is stored in session after login
    if (!userId) {
      return { message: 'Please log in to view your logs.' };
    }
    const logs = await this.logService.findAllByUserId(userId);
    return { logs, username };
  }
}
