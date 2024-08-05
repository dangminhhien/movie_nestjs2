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
  UseGuards, // Import the Guards decorator
} from '@nestjs/common';
import { Response } from 'express';
import { AdminService } from './admin.service';
import { CreateCourseDto } from '../DTO/create-movie.dto'; // Adjust the import as needed
import { RolesGuard } from '../auth/roles.guard'; // Import your custom roles guard
import { Roles } from '../auth/roles.decorator'; // Import your custom roles decorator

@Controller('admin')
@UseGuards(RolesGuard)
@Roles('admin') // Apply the roles guard with 'admin' role
export class AdminController {
  constructor(
    private readonly adminService: AdminService
  ) {}

  @Get('add-movie')
  @Render('admin')
  showAddMovieForm(@Req() req: Request) {
    const username = (req as any).session?.username;
    const role = (req as any).session?.role;
    if (!role || role !== 'admin') {
      return { message: 'Access denied' };
    }
    // const courses = await this.adminService.findAllMovies();

    return {username, role}; // You can pass additional data to the view if needed
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

      return res.status(HttpStatus.CREATED).json({
        message: 'Movie added successfully!',
        createdCourse
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error.message
      });
    }
  }
}