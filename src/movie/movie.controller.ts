import { Controller, Get, Param, Render, NotFoundException, Req } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get(':id')
    @Render('movie')
    async getMovieDetail(@Param('id') id: string, @Req() req: Request ) {
        try {
            const movie = await this.movieService.findOneById(id);
            const username = (req as any).session?.username;
            return { movie, username };
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
    @Get()
    @Render('local')
        async getLocalMovies(@Req() req: Request) {
            try {
                const movies = await this.movieService.findAll();
                const username = (req as any).session?.username || 'Guest';
                return {  movies, username };
            } catch (error) {
                throw new NotFoundException(error.message);
                }
        }
}
