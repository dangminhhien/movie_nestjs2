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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const create_movie_dto_1 = require("../DTO/create-movie.dto");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const courses_service_1 = require("../courses/courses.service");
const local_service_1 = require("../local/local.service");
const create_local_dto_1 = require("../DTO/create-local.dto");
let AdminController = class AdminController {
    constructor(adminService, courseService, localService) {
        this.adminService = adminService;
        this.courseService = courseService;
        this.localService = localService;
    }
    async showAddMovieForm(req) {
        const username = req.session?.username;
        const role = req.session?.role;
        if (!role || role !== 'admin') {
            return { message: 'Access denied' };
        }
        const courses = await this.courseService.findAll();
        return { username, role, courses };
    }
    async addMovie(createMovieDto, res, req) {
        const role = req.session?.role;
        if (!role || role !== 'admin') {
            return res.status(common_1.HttpStatus.FORBIDDEN).json({ message: 'Access denied' });
        }
        try {
            const { name, imageUrl, category, content, trailer } = createMovieDto;
            const image = imageUrl || '';
            const createdCourse = await this.adminService.createAdminMovie(name, image, category, content, trailer);
            return res.status(common_1.HttpStatus.CREATED).redirect('/admin/add-movie');
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: error.message
            });
        }
    }
    async showEditCourseForm(id, req) {
        const username = req.session?.username;
        const role = req.session?.role;
        if (!role || role !== 'admin') {
            return { message: 'Access denied' };
        }
        const course = await this.adminService.findCourseById(id);
        return { username, role, course };
    }
    async editCourse(id, updateCourseDto, res, req) {
        const role = req.session?.role;
        if (!role || role !== 'admin') {
            return res.status(common_1.HttpStatus.FORBIDDEN).json({ message: 'Access denied' });
        }
        try {
            const { name, imageUrl, category, content, trailer } = updateCourseDto;
            const image = imageUrl || '';
            const updatedCourse = await this.adminService.updateCourse(id, name, image, category, content, trailer);
            return res.status(common_1.HttpStatus.OK).redirect('/admin/add-movie');
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: error.message
            });
        }
    }
    async deleteCourse(id, res, req) {
        const role = req.session?.role;
        if (!role || role !== 'admin') {
            return res.status(common_1.HttpStatus.FORBIDDEN).json({
                message: 'Access denied',
            });
        }
        try {
            await this.adminService.deleteCourse(id);
            return res.status(common_1.HttpStatus.OK).redirect('/admin/add-movie');
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: error.message,
            });
        }
    }
    async showAddLocalForm(req) {
        const username = req.session?.username;
        const role = req.session?.role;
        if (!role || role !== 'admin') {
            return { message: 'Access denied' };
        }
        const locals = await this.localService.findAll();
        return { username, role, locals };
    }
    async addLocal(createLocalDto, res, req) {
        const role = req.session?.role;
        if (!role || role !== 'admin') {
            return res.status(common_1.HttpStatus.FORBIDDEN).json({
                message: 'Access denied'
            });
        }
        try {
            const { localName, local, imageLocal, map } = createLocalDto;
            const image = imageLocal || '';
            const createdLocal = await this.adminService.createAdminLocal(localName, image, local, map);
            return res.status(common_1.HttpStatus.CREATED).redirect('/admin/add-location');
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: error.message
            });
        }
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('add-movie'),
    (0, common_1.Render)('admin'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "showAddMovieForm", null);
__decorate([
    (0, common_1.Post)('add-movie'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movie_dto_1.CreateCourseDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "addMovie", null);
__decorate([
    (0, common_1.Get)('edit-course/:id'),
    (0, common_1.Render)('edit-course'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "showEditCourseForm", null);
__decorate([
    (0, common_1.Post)('edit-course/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_movie_dto_1.CreateCourseDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "editCourse", null);
__decorate([
    (0, common_1.Delete)('delete-course/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteCourse", null);
__decorate([
    (0, common_1.Get)('add-location'),
    (0, common_1.Render)('location'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "showAddLocalForm", null);
__decorate([
    (0, common_1.Post)('add-location'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_local_dto_1.CreateLocalDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "addLocal", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        courses_service_1.CoursesService,
        local_service_1.LocalService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map