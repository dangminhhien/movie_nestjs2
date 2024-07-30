import { Model } from 'mongoose';
import { CourseDocument } from '../schema/courses.schema';
export declare class AdminService {
    private readonly courseModel;
    constructor(courseModel: Model<CourseDocument>);
    createAdminMovie(name: string, image: string, category: string, content: string, trailer: string): Promise<CourseDocument>;
}
