import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema({collection: 'courses'})
export class Course {
    @Prop()
    name: string;

    @Prop()
    category: string;

    @Prop()
    image: string;

    @Prop()
    slug: string;

    @Prop()
    content: string; // New field for the movie content
  
    @Prop()
    trailer: string; // New field for the movie trailer URL
}

export const CourseSchema = SchemaFactory.createForClass(Course);