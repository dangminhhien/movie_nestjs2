import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesService } from './courses.service';
import { Course, CourseSchema } from '../schema/courses.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }])],
    providers: [CoursesService],
    exports: [CoursesService],
})
export class CoursesModule {}