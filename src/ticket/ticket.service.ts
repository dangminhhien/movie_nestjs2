import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket, TicketDocument } from '../schema/ticket.schema';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>) {}

  async create(ticketData: { movieName: string, username: string }): Promise<Ticket> {
    const createdTicket = new this.ticketModel({
      ...ticketData,
      createdAt: new Date(),
    });
    return createdTicket.save();
  }
}
