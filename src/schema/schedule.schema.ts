import { Schema, Document } from 'mongoose';

export interface Schedule extends Document {
  movieId: string;
  localId: string;
  time: string; // ISO 8601 format
}

export const ScheduleSchema = new Schema({
  movieId: { type: String, required: true },
  localId: { type: String, required: true },
  time: { type: String, required: true },
});
