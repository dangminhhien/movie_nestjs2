import { Controller, Get, Param, Render, NotFoundException, Req, Query, Redirect, Post, Body, Res } from '@nestjs/common';
import { LocalService } from './local.service';
import { MovieService } from '../movie/movie.service';
import { ScheduleService } from '../schedule/schedule.service';
import { Response } from 'express';


@Controller('local')
export class LocalController {
  constructor(
    private readonly localService: LocalService,
  ) {}



  @Get(':id/schedule')
@Redirect('/schedule')
async bookTicket(@Param('id') id: string, @Req() req: Request) {
  try {
    // console.log('Booking ticket for movie ID:', id);  // Debugging line
    (req as any).session.movieId = id;
    return { url: `/schedule?localId=${id}` };
  } catch (error) {
    console.error('Error:', error.message);  // Debugging line
    throw new NotFoundException(error.message);
  }
}



  @Get()
  @Render('local')
  async showLocalForm(
    @Param('id') id: string, 
    @Query('movieId') movieId: string,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    try {
      const locals = await this.localService.findAll();
      const selectedLocal = locals[0];
      const username = (req as any).session?.username ;
      const movieName = (req as any).session?.name || 'Unknown Movie';
      (req as any).session.localName = selectedLocal.localName;

      return { local: locals, username, movieId, movieName };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  
}