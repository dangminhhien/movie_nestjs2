import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket } from '../schema/ticket.schema';  // Import schema for Ticket
import { Movie } from '../schema/movie.schema';    // Import schema for Movie

@Injectable()
export class TicketService {
  constructor(
    @InjectModel('Ticket') private readonly ticketModel: Model<Ticket>,
    @InjectModel('Movie') private readonly movieModel: Model<Movie>
  ) {}

  async createTicket(movieId: string, username: string, movieName: string) {
    const ticket = new this.ticketModel({
      movieId,
      username,
      movieName,
      bookedAt: new Date(),
    });
    await ticket.save();
  }

  async getMovieDetails(movieId: string) {
    return this.movieModel.findById(movieId).exec();
  }
}
