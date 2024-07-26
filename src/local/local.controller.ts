import { Controller, Get, Param, Render, NotFoundException, Req, Query } from '@nestjs/common';
import { LocalService } from './local.service';

@Controller('local')
export class LocalController {
  constructor(
    private readonly localService: LocalService,
  ) {}

  @Get(':id/schedule')
  @Render('schedule')
  async bookTicket(@Param('id') id: string, @Req() req: Request) {
    try {
      // Ensure id is correctly received
      if (!id) {
        throw new NotFoundException('ID parameter is missing');
      }

      // Fetch local by ID
      const local = await this.localService.findOneById(id);

      if (!local) {
        throw new NotFoundException(`Local with ID ${id} not found`);
      }

      // Save movie ID and local ID to session
      (req as any).session.movieId = (req as any).session.movieId || 'defaultMovieId'; // Replace 'defaultMovieId' with a suitable value if needed
      (req as any).session.localId = id;

      // Pass local information to the view
      return { movieId: (req as any).session.movieId, localId: id, local };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get()
  @Render('local')
  async showLocalForm(@Query('movieId') movieId: string, @Req() req: Request) {
    const local = await this.localService.findAll();
    const username = (req as any).session?.username;
    const movieName = (req as any).session?.name || 'Unknown Movie';
    return { local, username, movieName, movieId };
  }
}