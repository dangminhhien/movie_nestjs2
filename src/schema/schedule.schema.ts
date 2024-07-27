import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScheduleDocument = Schedule & Document;

@Schema()
export class Schedule {
  @Prop({ required: true })
  movieId: string;

  @Prop({ required: true })
  localId: string;

  @Prop({ required: true })
  selectedDate: Date;

  @Prop({ required: true })
  selectedTime: string;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);