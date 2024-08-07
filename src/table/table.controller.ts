import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { LogService } from '../log/log.service';
import { Request, Response  } from 'express';


@Controller('table')
export class TableController {
  constructor(private readonly logService: LogService) {}

  @Get()
  @Render('table')
  async showLogs(@Req() req: Request, @Res() res: Response) {
    const username = (req as any).session?.username;
    const userId = (req as any).session?.userId;
    const role = (req as any).session?.role;
      if (!userId) {
        return res.status(401).send({ message: 'Please log in to view your logs.' });
      }
      let logs;
      if (role === 'admin') {
        logs = await this.logService.findAll();
      } else {
        logs = await this.logService.findAllByUserId(userId);
      }
  
      return { logs, username };
    }
    
    
  }
