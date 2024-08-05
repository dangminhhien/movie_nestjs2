import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from '../schema/courses.schema'; // Adjust the path as needed
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { CoursesModule } from 'src/courses/courses.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
    // Import other modules if needed
    CoursesModule,
    AuthModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService], // Export if needed elsewhere
})
export class AdminModule {}