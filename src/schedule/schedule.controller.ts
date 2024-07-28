import { Controller, Get, Query, Req, Render, NotFoundException } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { MovieService } from '../movie/movie.service';
import { Request } from 'express';
import { LocalService } from 'src/local/local.service';

@Controller('schedule')
export class ScheduleController {
  constructor(
    private readonly scheduleService: ScheduleService,
    private readonly movieService: MovieService,
    private readonly localService: LocalService
    
  ) {}

  @Get()
  @Render('schedule')
  async showSchedule(
    @Query('movieId') movieId: string,
    // @Query('movieName') movieName: string,
    @Query('localId') localId: string,
    @Query('localName') localName: string,
    @Req() req: Request
  ) {
    try {
      const schedule = await this.scheduleService.findAll();
      const username = (req as any).session?.username || 'Guest';
      const movieName = (req as any).session?.name || 'Unknown Movie';

      // console.log('Received movieId:', movieId);
      console.log('Received movieName:', movieName);
      // console.log('Received localId:', localId);
      console.log('Received localName:', localName);
      
      // if (!movieId || !movieName || !localId || !localName) {
      //   throw new NotFoundException('Thiếu thông tin cần thiết');
      // }


      return {  schedule: schedule, movieId, movieName, localId, localName, username };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
