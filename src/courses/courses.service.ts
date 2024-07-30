import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from '../schema/courses.schema';
import { CreateCourseDto } from '../DTO/create-movie.dto';

@Injectable()
export class CoursesService {
    constructor(@InjectModel(Course.name) private courseModel: Model<CourseDocument>) {}

    async findAll(): Promise<Course[]> {
        return this.courseModel.find().exec();
    }
    
    async create(createCourseDto: CreateCourseDto): Promise<Course> {
        const newCourse = new this.courseModel(createCourseDto);
        return newCourse.save();
      }

}
