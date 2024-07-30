import { Model } from 'mongoose';
import { Movie, MovieDocument } from '../schema/movie.schema';
import { MovieDto } from '../DTO/movie.dto';
export declare class MovieService {
    private movieModel;
    constructor(movieModel: Model<MovieDocument>);
    findAll(): Promise<Movie[]>;
    findOneById(id: string): Promise<MovieDto>;
    findById(id: string): Promise<Movie | null>;
}
