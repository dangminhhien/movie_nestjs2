import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TicketDocument = Ticket & Document;

@Schema({collection: 'tickets'})
export class Ticket {
  @Prop({ required: true })
  movieName: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  createdAt: Date;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
