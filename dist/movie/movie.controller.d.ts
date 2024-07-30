import { MovieService } from './movie.service';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    getMovieDetail(id: string, req: Request, res: Response): Promise<{
        movie: import("../DTO/movie.dto").MovieDto;
        username: any;
    }>;
    bookTicket(id: string, req: Request): Promise<{
        url: string;
    }>;
    getLocalMovies(req: Request): Promise<{
        movies: import("../schema/movie.schema").Movie[];
        username: any;
        name: any;
    }>;
}
