// movie.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Movie, MovieDocument } from '../schema/movie.schema';
import { MovieDto } from '../DTO/movie.dto';

@Injectable()
export class MovieService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>) {}

    async findAll(): Promise<Movie[]> {
        return this.movieModel.find().exec();
      }
      
    async findOneById(id: string): Promise<MovieDto>  {
        if (!id || !Types.ObjectId.isValid(id)) {
            throw new NotFoundException(`Invalid movie ID format: ${id}`);
          }
        const movie = await this.movieModel.findById(id).exec();
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found`);
        }
        return movie;
    }
    async findById(id: string): Promise<Movie | null> {
        return this.movieModel.findById(id).exec();
      }
}