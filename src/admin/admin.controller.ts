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
  Param,
} from '@nestjs/common';
import { Response } from 'express';
import { AdminService } from './admin.service';
import { CreateCourseDto } from '../DTO/create-movie.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CoursesService } from '../courses/courses.service';
import { LocalService } from '../local/local.service'; 
import { CreateLocalDto } from '../DTO/create-local.dto';
import { MESSAGES } from '@nestjs/core/constants';

@Controller('admin')
@UseGuards(RolesGuard)
@Roles('admin') // Apply the roles guard with 'admin' role
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly courseService: CoursesService,
    private readonly localService: LocalService,
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

  @Get('edit-course/:id')
  @Render('edit-course') // Assuming you have a view named 'edit-course.hbs'
  async showEditCourseForm(@Param('id') id: string, @Req() req: Request) {
    const username = (req as any).session?.username;
    const role = (req as any).session?.role;
    if (!role || role !== 'admin') {
      return { message: 'Access denied' };
    }

    const course = await this.adminService.findCourseById(id);
    return { username, role, course }; // Pass course data to the view
  }

  @Post('edit-course/:id')
  async editCourse(
    @Param('id') id: string,
    @Body() updateCourseDto: CreateCourseDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const role = (req as any).session?.role;
    if (!role || role !== 'admin') {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Access denied' });
    }

    try {
      const { name, imageUrl, category, content, trailer } = updateCourseDto;
      const image = imageUrl || '';
      const updatedCourse = await this.adminService.updateCourse(
        id,
        name,
        image,
        category,
        content,
        trailer
      );

      return res.status(HttpStatus.OK).redirect('/admin/add-movie'); // Redirect after updating course
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error.message
      });
    }
  }

  @Post('delete-course/:id')
  async deleteCourse(
    @Param('id') id: string,
    @Body('_method') method: string,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const role = (req as any).session?.role;
    if (!role || role !== 'admin') {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'Access denied',
      });
    }

    if (method === 'DELETE') {
      try {
        await this.adminService.deleteCourse(id);
        return res.redirect('/admin/add-movie');
      } catch (error) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: error.message,
        });
      }
    }

    return res.status(HttpStatus.BAD_REQUEST).json({
      message: 'Invalid method',
    });
  }

  @Get('add-location')
  @Render('location')
  async showAddLocalForm(@Req() req: Request) {
    const username = (req as any).session?.username;
    const role = (req as any).session?.role;
    if (!role || role!== 'admin') {
      return { message: 'Access denied' };
    }
    const locals = await this.localService.findAll();
    // console.log (locals);

    return { username, role, local: locals };
  }

  @Post('add-location')
  async addLocal(
    @Body() createLocalDto: CreateLocalDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const role = (req as any).session?.role;
    if (!role || role!== 'admin') {
      return res.status(HttpStatus.FORBIDDEN).json({
         message: 'Access denied' 
        });
    }

    try {
      const { localName, local, imageLocal, map} = createLocalDto;
      const image = imageLocal || '';
      const createdLocal = await this.adminService.createAdminLocal(
        localName,
        local,
        image,
        map,
      );
      return res.status(HttpStatus.CREATED).redirect('/admin/add-location');
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ 
        message: error.message 
      });
    }
  }

  @Get('edit-location/:id')
  @Render('edit-location')
  async showEditLocalForm(@Param('id') id: string, @Req() req: Request) {
    const username = (req as any).session?.username;
    const role = (req as any).session?.role;
    if (!role || role !== 'admin') {
      return { message: 'Access denied' };
    }
    const local = await this.adminService.findLocalById(id);
    return { username, role, local };
  }

  @Post('edit-location/:id')
  async editLocation(
    @Param('id') id: string,
    @Body() updateLocalDto: CreateLocalDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const role = (req as any).session?.role;
    if (!role || role!== 'admin') {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'Access denied',
      });
    }
    try {
      const { localName, local, imageLocal, map} = updateLocalDto;
      const image = imageLocal || '';
      const updatedLocal = await this.adminService.updateLocal(
        id,
        localName,
        local,
        image,
        map,
      );
      return res.status(HttpStatus.OK).redirect('/admin/add-location');
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
      });
    }
  }

  @Post('delete-location/:id')
  async deleteLocation(
    @Param('id') id: string,
    @Body('_method') method: string,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const role = (req as any).session?.role;
    if (!role || role!== 'admin') {
      return res.status(HttpStatus.FORBIDDEN).json({
        message: 'Access denied',
      });
    }
    if (method === 'DELETE') {
      try {
        await this.adminService.deleteLocal(id);
        return res.redirect('/admin/add-location');
      } catch (error) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: error.message,
        });
      }
    }

    return res.status(HttpStatus.BAD_REQUEST).json({
      message: 'Invalid method',
    });
  }


}