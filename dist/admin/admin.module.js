"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const courses_schema_1 = require("../schema/courses.schema");
const admin_controller_1 = require("./admin.controller");
const admin_service_1 = require("./admin.service");
const courses_module_1 = require("../courses/courses.module");
const auth_module_1 = require("../auth/auth.module");
const local_module_1 = require("../local/local.module");
const local_schema_1 = require("../schema/local.schema");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: courses_schema_1.Course.name, schema: courses_schema_1.CourseSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: local_schema_1.Local.name, schema: local_schema_1.LocalSchema }]),
            courses_module_1.CoursesModule,
            auth_module_1.AuthModule,
            local_module_1.LocalModule,
        ],
        controllers: [admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService],
        exports: [admin_service_1.AdminService],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map