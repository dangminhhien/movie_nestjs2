import { Controller, Get, Render, Req } from '@nestjs/common';
import { CoursesService } from './courses.service'; // Import service của bạn

@Controller()
export class CoursesController {
    constructor(private readonly courseService: CoursesService) {}

    @Get()
    @Render('client')
    async showCoursesForm(@Req() req: Request) {
        const courses = await this.courseService.findAll();
        const username = (req as any).session?.username;
        const role = (req as any).session?.role;
        // console.log('role: ' + role);
        return { 
            courses, 
            username: username,  // Nếu không có username thì hiển thị 'Guest'
            role
        };
    }
}