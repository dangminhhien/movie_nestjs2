import { Response } from 'express';
import { AdminService } from './admin.service';
import { CreateCourseDto } from '../DTO/create-movie.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    showAddMovieForm(): {};
    addMovie(createMovieDto: CreateCourseDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
