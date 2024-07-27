import { Controller, Get, Query, Req, Render, NotFoundException } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { MovieService } from '../movie/movie.service';
import { Request } from 'express';

@Controller('schedule')
export class ScheduleController {
  constructor(
    private readonly scheduleService: ScheduleService,
    private readonly movieService: MovieService,
  ) {}

  @Get()
  @Render('schedule')
  async showSchedule(
    @Query('movieId') movieId: string,
    @Query('movieName') movieName: string,
    @Query('localId') localId: string,
    @Query('localName') localName: string,
    @Req() req: Request
  ) {
    try {
      console.log('Received movieId:', movieId);
      console.log('Received movieName:', movieName);
      console.log('Received localId:', localId);
      console.log('Received localName:', localName);
      
      // if (!movieId || !movieName || !localId || !localName) {
      //   throw new NotFoundException('Thiếu thông tin cần thiết');
      // }

      // const movie = await this.movieService.findById(movieId);
      const username = (req as any).session?.username || 'Guest';

      return { movieId, movieName, localId, localName, username };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
