"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const courses_module_1 = require("./courses/courses.module");
const courses_controller_1 = require("./courses/courses.controller");
const movie_module_1 = require("./movie/movie.module");
const local_module_1 = require("./local/local.module");
const schedule_module_1 = require("./schedule/schedule.module");
const history_controller_1 = require("./history/history.controller");
const log_module_1 = require("./log/log.module");
const table_controller_1 = require("./table/table.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/movie'),
            auth_module_1.AuthModule,
            courses_module_1.CoursesModule,
            movie_module_1.MovieModule,
            local_module_1.LocalModule,
            schedule_module_1.ScheduleModule,
            log_module_1.LogModule,
        ],
        controllers: [app_controller_1.AppController, courses_controller_1.CoursesController, history_controller_1.HistoryController, table_controller_1.TableController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map