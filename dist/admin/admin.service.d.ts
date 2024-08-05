import { Model } from 'mongoose';
import { Course, CourseDocument } from '../schema/courses.schema';
export declare class AdminService {
    private readonly courseModel;
    constructor(courseModel: Model<CourseDocument>);
    createAdminMovie(name: string, image: string, category: string, content: string, trailer: string): Promise<CourseDocument>;
    findAllCourses(): Promise<(import("mongoose").Document<unknown, {}, CourseDocument> & Course & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>)[]>;
    findCourseById(id: string): Promise<CourseDocument>;
    updateCourse(id: string, name: string, image: string, category: string, content: string, trailer: string): Promise<CourseDocument>;
    deleteCourse(id: string): Promise<void>;
}
