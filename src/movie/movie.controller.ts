import { Controller, Get, Param, Render, NotFoundException, Req, Res, Redirect } from '@nestjs/common';
import { MovieService } from './movie.service';


@Controller('movie')
export class MovieController {
    constructor(
        private readonly movieService: MovieService,
    ) {}

    @Get(':id')
    @Render('movie')
    async getMovieDetail(
        @Param('id') id: string, 
        @Req() req: Request, 
        @Res() res: Response 
    ) {
        if (!id || id.trim() === '') {
            throw new NotFoundException('Movie ID is required');
          }
        try {
            const movie = await this.movieService.findOneById(id);
            const username = (req as any).session?.username;
            (req as any).session.name = movie.name;
            return { movie, username };
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

    @Get(':id/local')
    @Redirect('/local')
    async bookTicket(@Param('id') id: string, @Req() req: Request) {
        try {
            // Save movie ID to session
            (req as any).session.movieId = id;

            // Redirect to /local with movieId query parameter
            return { url: `/local?movieId=${id}` };
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

    @Get()
    @Render('local')
    async getLocalMovies(@Req() req: Request) {
        try {
            const movies = await this.movieService.findAll();
            const username = (req as any).session?.username;
            const name = (req as any).session?.name;
                return {  movies, username, name };
            } catch (error) {
                throw new NotFoundException(error.message);
                }
        }
}