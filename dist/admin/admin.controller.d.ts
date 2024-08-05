import { Response } from 'express';
import { AdminService } from './admin.service';
import { CreateCourseDto } from '../DTO/create-movie.dto';
import { CoursesService } from '../courses/courses.service';
export declare class AdminController {
    private readonly adminService;
    private readonly courseService;
    constructor(adminService: AdminService, courseService: CoursesService);
    showAddMovieForm(req: Request): Promise<{
        message: string;
        username?: undefined;
        role?: undefined;
        courses?: undefined;
    } | {
        username: any;
        role: any;
        courses: import("../schema/courses.schema").Course[];
        message?: undefined;
    }>;
    addMovie(createMovieDto: CreateCourseDto, res: Response, req: Request): Promise<void | Response<any, Record<string, any>>>;
    deleteCourse(id: string, res: Response, req: Request): Promise<void | Response<any, Record<string, any>>>;
}
