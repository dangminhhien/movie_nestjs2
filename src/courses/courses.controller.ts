import { Controller, Get, Render, Req } from '@nestjs/common';
import { CoursesService } from './courses.service'; // Import service của bạn

@Controller()
export class CoursesController {
    constructor(private readonly courseService: CoursesService) {}

    // @Get()
    // @Render('client')
    // async showCoursesForm() {
    //     const courses = await this.courseService.findAll();
    //     return { courses };
    // }

    @Get()
    @Render('client')
    async showCoursesForm(@Req() req: Request) {
        const courses = await this.courseService.findAll();
        const username = (req as any).session?.username;
        return { 
            courses, 
            username: username  // Nếu không có username thì hiển thị 'Guest'
        };
    }
}