import { Controller, Post, Body, Render, Query, Req } from '@nestjs/common';
import { ScheduleService } from 'src/schedule/schedule.service';
import { Request } from 'express';
import { LocalService } from '../local/local.service';
import { LogService } from '../log/log.service'; //

@Controller('history')
export class HistoryController {
    constructor(   
         private readonly scheduleService: ScheduleService,
         private readonly localService: LocalService,
         private readonly logService: LogService,

    ) { }

  @Post()
  @Render('history')
  async showHistory(
    @Body('selectedDate') selectedDate: string,
    @Body('selectedTime') selectedTime: string,
    // @Query('movieId') movieId: string,
    // @Query('movieName') movieName: string,
    @Query('localId') localId: string,
    @Query('localName') localName: string,
    @Req() req: Request

  ) {
    const local = await this.localService.findAll();
    const username = (req as any).session?.username || 'Guest';
    const movieName = (req as any).session?.name || 'Unknown Movie';
    // const localName = (req as any).session?.localName || 'Unknown Local';

    console.log('Received username:', username);
    console.log('Received movieName:', movieName);
    console.log('Received localName:', localName);
   
    await this.logService.createHistoryLog( username ,selectedDate, selectedTime );
    
    return { local: local, username, selectedDate, selectedTime, movieName, localName, localId};
  }
}