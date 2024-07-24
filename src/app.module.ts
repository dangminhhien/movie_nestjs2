import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from './courses/courses.module';
import { CoursesController } from './courses/courses.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/movie'),
    AuthModule,
    CoursesModule,

    
  ],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule {}