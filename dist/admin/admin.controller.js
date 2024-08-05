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
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    showAddMovieForm(req) {
        const username = req.session?.username;
        const role = req.session?.role;
        if (!role || role !== 'admin') {
            return { message: 'Access denied' };
        }
        return { username, role };
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
            return res.status(common_1.HttpStatus.CREATED).json({
                message: 'Movie added successfully!',
                createdCourse
            });
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
    __metadata("design:returntype", void 0)
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
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map