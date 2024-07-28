import { Controller, Post, Body, Render, Query, Req } from '@nestjs/common';
import { ScheduleService } from 'src/schedule/schedule.service';
import { Request } from 'express';
import { LocalService } from '../local/local.service';

@Controller('history')
export class HistoryController {
    constructor(   
         private readonly scheduleService: ScheduleService,
         private readonly localService: LocalService,

    ) { }

  @Post()
  @Render('history')
  async showHistory(
    @Body('selectedDate') selectedDate: string,
    @Body('selectedTime') selectedTime: string,
    @Query('movieId') movieId: string,
    // @Query('movieName') movieName: string,
    @Query('localId') localId: string,
    @Query('localName') localName: string,
    @Req() req: Request

  ) {
    // const local = await this.localService.findAll();
    const schedule = await this.scheduleService.findAll();
    const username = (req as any).session?.username || 'Guest';
    const movieName = (req as any).session?.name || 'Unknown Movie';
    // const localName = (req as any).session?.location || 'Unknown Location';
    // Here you could add any necessary logic, like saving the data to the database
    return {  schedule: schedule, selectedDate, selectedTime, username, movieName, localName, movieId, localId };
  }
}