import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from '../schema/courses.schema'; // Import your schema

@Injectable()
export class AdminService {
  constructor(@InjectModel(Course.name) private readonly courseModel: Model<CourseDocument>) {}

  async createAdminMovie(
    name: string,
    image: string, // This will be the filename or URL for the image
    category: string,
    content: string,
    trailer: string // This will be the URL for the trailer
  ): Promise<CourseDocument> {
    const newCourse = new this.courseModel({
      name,
      image,    // Image can be either a URL or filename, depending on your use case
      category,
      content,
      trailer,
      
    });
    return newCourse.save();
  }
}
