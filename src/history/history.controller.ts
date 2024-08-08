import { Controller, Post, Body, Render, Query, Req } from '@nestjs/common';
import { ScheduleService } from 'src/schedule/schedule.service';
import { Request } from 'express';
import { LocalService } from '../local/local.service';
import { LogService } from '../log/log.service';

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
    // @Body('selectedDate') selectedDate: string,
    // @Body('selectedTime') selectedTime: string,
    @Query('movieId') movieId: string,
    @Query('localId') localId: string,
    @Req() req: Request

  ) {
    
    const userId = (req as any).session?.userId;
    const username = (req as any).session?.username;
    const movieName = (req as any).session?.name || 'Unknown Movie';
    const localName = (req as any).session?.localName || 'Unknown Local';
    const bookedChairs = (req as any).session?.bookedChairs || [];
    const selectedDate = (req as any).session?.selectedDate;
    const selectedTime = (req as any).session?.selectedTime;

    
    
    if(!username){
      return {message: 'Please login'};
    }else{
      const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);
      const isConflict = await this.logService.isTimeConflict(selectedDateTime);
      if (isConflict) {
        return { message: 'The selected time conflicts with an existing schedule. Please choose another time.' };
      }
      await this.logService.createScheduleLog(username, userId,selectedDate, selectedTime, movieName, localName);


      console.log('Form submitted2:', {
        selectedDate, selectedTime, localName, username, bookedChairs, movieName
      });


      return { username, userId, selectedDate, selectedTime, movieName, localName, movieId, localId, bookedChairs};
    }
  }
}