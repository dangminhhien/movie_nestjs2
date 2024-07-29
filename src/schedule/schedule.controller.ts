import { Controller, Get, Query, Req, Render, NotFoundException } from '@nestjs/common';
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
    // @Query('movieName') movieName: string,
    @Query('localId') localId: string,
    @Query('localName') localName: string,
    @Req() req: Request
  ) {
    try {
      // const schedule = await this.scheduleService.findAll();
      const username = (req as any).session?.username;
      const movieName = (req as any).session?.name || 'Unknown Movie';

      

        
        
        // console.log('Received username:', username);
        // console.log('Received movieName:', movieName);
        // console.log('Received localName:', localName);
        
        // await this.logService.createScheduleLog( username, movieName, localName);
        
        
        return {   movieId, movieName, localId, localName, username };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
