import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScheduleDocument = Schedule & Document;

@Schema({ collection: 'schedules' })
export class Schedule {
  @Prop({ required: true })
  movieName: string;

  @Prop({ required: true })
  localName: string;

  @Prop({ required: true })
  selectedDate: string; // Consider using Date type if you need date-specific operations

  @Prop({ required: true })
  selectedTime: string; // Consider using Time type if applicable, otherwise, keep as string
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
