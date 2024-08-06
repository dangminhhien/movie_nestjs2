import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from '../schema/courses.schema';
import { Local, LocalDocument } from 'src/schema/local.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Course.name) private readonly courseModel: Model<CourseDocument>,
    @InjectModel(Local.name) private readonly localModel: Model<LocalDocument>,
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

  async createAdminLocal(
    localName: string,
    image: string,
    local: string,
    map: string,
  ): Promise<LocalDocument> {
    const newLocal = new this.localModel({
      localName,
      image,
      local,
      map,
    });
    return newLocal.save();
  }

  async findAllCourses() {
    return this.courseModel.find().exec();
  }

  async findCourseById(id: string): Promise<CourseDocument> {
    return this.courseModel.findById(id).exec();
  }

  async updateCourse(
    id: string,
    name: string,
    image: string, 
    category: string,
    content: string,
    trailer: string 
  ): Promise<CourseDocument> {
    return this.courseModel.findByIdAndUpdate(
      id,
      { name, image, category, content, trailer },
      { new: true }
    ).exec();
  }

  async deleteCourse(id: string): Promise<void> {
    await this.courseModel.findByIdAndDelete(id).exec();
  }
}