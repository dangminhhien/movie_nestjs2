import { Controller, Get, Query, Render, Req } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { MovieService } from '../movie/movie.service';  // Adjust path as needed
import { LocalService } from '../local/local.service';  // Adjust path as needed

@Controller('schedule')
export class ScheduleController {
  constructor(
    private readonly scheduleService: ScheduleService,
    private readonly movieService: MovieService,  // Ensure MovieService is provided
    private readonly localService: LocalService,  // Ensure LocalService is provided
  ) {}

  @Get()
  @Render('schedule')
  async showScheduleForm(
    @Query('movieId') movieId: string, 
    @Query('localId') localId: string,  
    @Req() req: Request,
  ) {
    const username = (req as any).session?.username;
    const movieName = (req as any).session?.name || 'Unknown Movie';
    const localName = (req as any).session?.namelocal|| 'Unknown Location';
    return { movieId, localId, username, movieName,  localName};
  }
  

}
