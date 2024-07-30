import { Model } from 'mongoose';
import { Course, CourseDocument } from '../schema/courses.schema';
import { CreateCourseDto } from '../DTO/create-movie.dto';
export declare class CoursesService {
    private courseModel;
    constructor(courseModel: Model<CourseDocument>);
    findAll(): Promise<Course[]>;
    create(createCourseDto: CreateCourseDto): Promise<Course>;
}
