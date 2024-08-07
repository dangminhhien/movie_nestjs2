import { Response } from 'express';
import { AdminService } from './admin.service';
import { CreateCourseDto } from '../DTO/create-movie.dto';
import { CoursesService } from '../courses/courses.service';
import { LocalService } from '../local/local.service';
import { CreateLocalDto } from '../DTO/create-local.dto';
export declare class AdminController {
    private readonly adminService;
    private readonly courseService;
    private readonly localService;
    constructor(adminService: AdminService, courseService: CoursesService, localService: LocalService);
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
    showEditCourseForm(id: string, req: Request): Promise<{
        message: string;
        username?: undefined;
        role?: undefined;
        course?: undefined;
    } | {
        username: any;
        role: any;
        course: import("../schema/courses.schema").CourseDocument;
        message?: undefined;
    }>;
    editCourse(id: string, updateCourseDto: CreateCourseDto, res: Response, req: Request): Promise<void | Response<any, Record<string, any>>>;
    deleteCourse(id: string, method: string, res: Response, req: Request): Promise<void | Response<any, Record<string, any>>>;
    showAddLocalForm(req: Request): Promise<{
        message: string;
        username?: undefined;
        role?: undefined;
        local?: undefined;
    } | {
        username: any;
        role: any;
        local: import("../schema/local.schema").Local[];
        message?: undefined;
    }>;
    addLocal(createLocalDto: CreateLocalDto, res: Response, req: Request): Promise<void | Response<any, Record<string, any>>>;
    showEditLocalForm(id: string, req: Request): Promise<{
        message: string;
        username?: undefined;
        role?: undefined;
        local?: undefined;
    } | {
        username: any;
        role: any;
        local: import("../schema/local.schema").LocalDocument;
        message?: undefined;
    }>;
    editLocation(id: string, updateLocalDto: CreateLocalDto, res: Response, req: Request): Promise<void | Response<any, Record<string, any>>>;
    deleteLocation(id: string, method: string, res: Response, req: Request): Promise<void | Response<any, Record<string, any>>>;
}
