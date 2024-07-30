import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Render, 
  Res, 
  HttpStatus, 
  Req 
} from '@nestjs/common';
import { Response } from 'express';
import { AdminService } from './admin.service';
import { CreateCourseDto } from '../DTO/create-movie.dto'; // Adjust the import as needed

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService
  ) {}

  @Get('add-movie')
  @Render('admin') // Assuming you have a view named 'admin.hbs'
  showAddMovieForm() {
    return {}; // You can pass additional data to the view if needed
  }

  @Post('add-movie')
  async addMovie(
    @Body() createMovieDto: CreateCourseDto, // Ensure this DTO matches your expected input
    @Res() res: Response
  ) {
    try {
      // Extract values from DTO
      const { name, imageUrl, category, content, trailer } = createMovieDto;

      // Handle the image URL if it's provided
      const image = imageUrl || ''; // Set a default value if imageUrl is not provided

      // Call the service to create a new movie
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
