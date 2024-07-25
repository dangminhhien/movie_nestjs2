import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {
  @Prop({ required: true })
  movieId: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  movieName: string;

  @Prop({ required: true })
  bookedAt: Date;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);