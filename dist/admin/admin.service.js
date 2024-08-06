"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const courses_schema_1 = require("../schema/courses.schema");
const local_schema_1 = require("../schema/local.schema");
let AdminService = class AdminService {
    constructor(courseModel, localModel) {
        this.courseModel = courseModel;
        this.localModel = localModel;
    }
    async createAdminMovie(name, image, category, content, trailer) {
        const newCourse = new this.courseModel({
            name,
            image,
            category,
            content,
            trailer,
        });
        return newCourse.save();
    }
    async createAdminLocal(localName, image, local, map) {
        const newLocal = new this.localModel({
            localName,
            image,
            local,
            map,
        });
        return newLocal.save();
    }
    async findAllCourses() {
        return this.courseModel.find().exec();
    }
    async findCourseById(id) {
        return this.courseModel.findById(id).exec();
    }
    async updateCourse(id, name, image, category, content, trailer) {
        return this.courseModel.findByIdAndUpdate(id, { name, image, category, content, trailer }, { new: true }).exec();
    }
    async deleteCourse(id) {
        await this.courseModel.findByIdAndDelete(id).exec();
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(courses_schema_1.Course.name)),
    __param(1, (0, mongoose_1.InjectModel)(local_schema_1.Local.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], AdminService);
//# sourceMappingURL=admin.service.js.map