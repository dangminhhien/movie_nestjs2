import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket, TicketDocument } from '../schema/ticket.schema';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name) private readonly ticketModel: Model<TicketDocument>,
  ) {}

  async create(createTicketDto: { movieId: string; username: string; movieName: string }) {
    const createdTicket = new this.ticketModel(createTicketDto);
    return createdTicket.save();
  }
}
