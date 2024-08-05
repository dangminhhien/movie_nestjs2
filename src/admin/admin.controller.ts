import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Render, 
  Res, 
  HttpStatus, 
  Req,
  Request,
  UseGuards,
  Delete,
  Param, // Import the Guards decorator
} from '@nestjs/common';
import { Response } from 'express';
import { AdminService } from './admin.service';
import { CreateCourseDto } from '../DTO/create-movie.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CoursesService } from '../courses/courses.service'; // Import service của bạn

@Controller('admin')
@UseGuards(RolesGuard)
@Roles('admin') // Apply the roles guard with 'admin' role
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly courseService: CoursesService,
  ) {}

  @Get('add-movie')
  @Render('admin')
  async showAddMovieForm(@Req() req: Request) {
    const username = (req as any).session?.username;
    const role = (req as any).session?.role;
    if (!role || role !== 'admin') {
      return { message: 'Access denied' };
    }
    const courses = await this.courseService.findAll();

    return {username, role, courses};
  }

  @Post('add-movie')
  async addMovie(
    @Body() createMovieDto: CreateCourseDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const role = (req as any).session?.role;
    if (!role || role !== 'admin') {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Access denied' });
    }

    try {
      const { name, imageUrl, category, content, trailer } = createMovieDto;
      const image = imageUrl || '';
      const createdCourse = await this.adminService.createAdminMovie(
        name,
        image,
        category,
        content,
        trailer
      );
      return res.status(HttpStatus.CREATED).redirect('/admin/add-movie');
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error.message
      });
    }
  }

  @Delete('delete-course/:id')
  async deleteCourse(
    @Param('id') id: string,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const role = (req as any).session?.role;
    if (!role || role !== 'admin') {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'Access denied',
      });
    }

    try {
      await this.adminService.deleteCourse(id);
      return res.status(HttpStatus.OK).redirect('/admin/add-movie');
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
      });
    }
  }
}