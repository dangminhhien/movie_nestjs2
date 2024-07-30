import { Model } from 'mongoose';
import { Course, CourseDocument } from '../schema/courses.schema';
export declare class CoursesService {
    private courseModel;
    constructor(courseModel: Model<CourseDocument>);
    findAll(): Promise<Course[]>;
}
