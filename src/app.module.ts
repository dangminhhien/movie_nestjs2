import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from './courses/courses.module';
import { CoursesController } from './courses/courses.controller';
import { MovieModule } from './movie/movie.module';
import { LocalModule } from './local/local.module';
import { ScheduleModule } from './schedule/schedule.module';
import { HistoryController } from './history/history.controller';
import { LogModule } from './log/log.module';
import { TableController } from './table/table.controller';
import { AdminModule } from './admin/admin.module';
import { AdminService } from './admin/admin.service';
import { LogService } from './log/log.service';
import { ScheduleController } from './schedule/schedule.controller';
import { ScheduleService } from './schedule/schedule.service';
import { Course, CourseSchema } from './schema/courses.schema';
import { LocalController } from './local/local.controller';
import { CoursesService } from './courses/courses.service';
import { LocalService } from './local/local.service';
import { AdminController } from './admin/admin.controller';
import { ChairModule } from './chair/chair.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/movie'),
    AuthModule,
    CoursesModule,
    MovieModule,
    LocalModule,
    ScheduleModule,
    LogModule,
    AdminModule,
    ChairModule,


  ],
  controllers: [AppController, CoursesController, HistoryController, TableController],
  providers: [AppService ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    
  }
}