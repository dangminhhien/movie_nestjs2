import { CoursesService } from './courses.service';
export declare class CoursesController {
    private readonly courseService;
    constructor(courseService: CoursesService);
    showCoursesForm(req: Request): Promise<{
        courses: import("../schema/courses.schema").Course[];
        username: any;
    }>;
}
