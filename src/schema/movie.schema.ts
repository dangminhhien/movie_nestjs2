import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema({collection: 'courses'})
export class Movie {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  trailer: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);