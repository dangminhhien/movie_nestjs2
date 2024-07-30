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
    @Body('selectedDate') selectedDate: string,
    @Body('selectedTime') selectedTime: string,
    // @Body('userId') userId: string,
    @Query('movieId') movieId: string,
    // @Query('movieName') movieName: string,
    @Query('localId') localId: string,
    // @Query('localName') localName: string,
    @Req() req: Request

  ) {
    
    const userId = (req as any).session?.userId;
    const username = (req as any).session?.username;
    const movieName = (req as any).session?.name || 'Unknown Movie';
    const localName = (req as any).session?.localName || 'Unknown Local';
    
    console.log('UserId:', userId); // Log the userId
    console.log('MovieId:', movieId); // Log the movieId
    console.log('LocalId:', localId); // Log the localId

    
    if(!username){
      return {message: 'Please login'};
    }else{
      const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);
      const isConflict = await this.logService.isTimeConflict(selectedDateTime);
      if (isConflict) {
        return { message: 'The selected time conflicts with an existing schedule. Please choose another time.' };
      }
      await this.logService.createScheduleLog(username, selectedDate, selectedTime, movieName, localName);
      
      return {userId, username, selectedDate, selectedTime, movieName, localName, movieId, localId};
    }
  }
}