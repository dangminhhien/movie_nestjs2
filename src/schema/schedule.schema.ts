import { Schema, Document } from 'mongoose';
import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { Movie } from '../schema/movie.schema';  // Adjust the path as needed
import { Local } from '../schema/local.schema';  // Adjust the path as needed

export type ScheduleDocument = Schedule & Document;

@MongooseSchema()
export class Schedule {
  @Prop({ type: Schema.Types.ObjectId, ref: 'Movie', required: true })
  movie: Movie;

  @Prop({ type: Schema.Types.ObjectId, ref: 'Local', required: true })
  local: Local;

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: String, required: true })
  time: string;  // Example: "14:00" for 2 PM
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
