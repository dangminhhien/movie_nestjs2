import { Response } from 'express';
import { AdminService } from './admin.service';
import { CreateCourseDto } from '../DTO/create-movie.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    showAddMovieForm(req: Request): {
        message: string;
        username?: undefined;
        role?: undefined;
    } | {
        username: any;
        role: any;
        message?: undefined;
    };
    addMovie(createMovieDto: CreateCourseDto, res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
}
