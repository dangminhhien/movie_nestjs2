import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from './courses/courses.module';
import { CoursesController } from './courses/courses.controller';
import { MovieModule } from './movie/movie.module';
import { LocalModule } from './local/local.module';
import { ScheduleController } from './schedule/schedule.controller';
import { ScheduleService } from './schedule/schedule.service';
import { ScheduleModule } from './schedule/schedule.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/movie'),
    AuthModule,
    CoursesModule,
    MovieModule,
    LocalModule,
    ScheduleModule,

  ],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule {}