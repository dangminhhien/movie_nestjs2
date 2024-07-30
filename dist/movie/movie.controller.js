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
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie.service");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async getMovieDetail(id, req, res) {
        if (!id || id.trim() === '') {
            throw new common_1.NotFoundException('Movie ID is required');
        }
        try {
            const movie = await this.movieService.findOneById(id);
            const username = req.session?.username;
            req.session.name = movie.name;
            return { movie, username };
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async bookTicket(id, req) {
        try {
            req.session.movieId = id;
            return { url: `/local?movieId=${id}` };
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async getLocalMovies(req) {
        try {
            const movies = await this.movieService.findAll();
            const username = req.session?.username;
            const name = req.session?.name;
            return { movies, username, name };
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
exports.MovieController = MovieController;
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.Render)('movie'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Request,
        Response]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovieDetail", null);
__decorate([
    (0, common_1.Get)(':id/local'),
    (0, common_1.Redirect)('/local'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Request]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "bookTicket", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('local'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getLocalMovies", null);
exports.MovieController = MovieController = __decorate([
    (0, common_1.Controller)('movie'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
//# sourceMappingURL=movie.controller.js.map