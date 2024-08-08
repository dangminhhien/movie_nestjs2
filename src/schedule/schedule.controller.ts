import { Controller, Get, Query, Req, Render, NotFoundException, Redirect } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { MovieService } from '../movie/movie.service';
import { Request } from 'express';
import { LocalService } from 'src/local/local.service';
import { LogService } from 'src/log/log.service';

@Controller('schedule')
export class ScheduleController {
  constructor(
    private readonly scheduleService: ScheduleService,
    private readonly movieService: MovieService,
    private readonly localService: LocalService,
    private readonly logService: LogService,
    
  ) {}

  @Get()
  @Render('schedule')
  async showSchedule(
    @Query('movieId') movieId: string,
    @Query('localId') localId: string,
    @Query('localName') localName: string,
    @Req() req: Request
  ) {
    try {
      const username = (req as any).session?.username;
      const movieName = (req as any).session?.name || 'Unknown Movie';
        
        return {   movieId, movieName, localId, localName, username };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  
}
