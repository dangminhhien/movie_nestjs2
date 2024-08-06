import { Model } from 'mongoose';
import { Course, CourseDocument } from '../schema/courses.schema';
import { LocalDocument } from 'src/schema/local.schema';
export declare class AdminService {
    private readonly courseModel;
    private readonly localModel;
    constructor(courseModel: Model<CourseDocument>, localModel: Model<LocalDocument>);
    createAdminMovie(name: string, image: string, category: string, content: string, trailer: string): Promise<CourseDocument>;
    createAdminLocal(localName: string, image: string, local: string, map: string): Promise<LocalDocument>;
    findAllCourses(): Promise<(import("mongoose").Document<unknown, {}, CourseDocument> & Course & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>)[]>;
    findCourseById(id: string): Promise<CourseDocument>;
    updateCourse(id: string, name: string, image: string, category: string, content: string, trailer: string): Promise<CourseDocument>;
    deleteCourse(id: string): Promise<void>;
}
