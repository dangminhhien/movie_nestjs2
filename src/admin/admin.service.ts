import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from '../schema/courses.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Course.name) private readonly courseModel: Model<CourseDocument>,

  ) {}

  async createAdminMovie(
    name: string,
    image: string, 
    category: string,
    content: string,
    trailer: string 
  ): Promise<CourseDocument> {
    const newCourse = new this.courseModel({
      name,
      image,
      category,
      content,
      trailer,
      
    });
    return newCourse.save();
  }

  // async findAllMovies() {
  //   return this.courseModel.find().exec();
  // }
}
