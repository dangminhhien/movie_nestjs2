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
exports.ScheduleController = void 0;
const common_1 = require("@nestjs/common");
const schedule_service_1 = require("./schedule.service");
const movie_service_1 = require("../movie/movie.service");
const local_service_1 = require("../local/local.service");
const log_service_1 = require("../log/log.service");
let ScheduleController = class ScheduleController {
    constructor(scheduleService, movieService, localService, logService) {
        this.scheduleService = scheduleService;
        this.movieService = movieService;
        this.localService = localService;
        this.logService = logService;
    }
    async showSchedule(movieId, localId, localName, req) {
        try {
            const username = req.session?.username;
            const movieName = req.session?.name || 'Unknown Movie';
            return { movieId, movieName, localId, localName, username };
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
exports.ScheduleController = ScheduleController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('schedule'),
    __param(0, (0, common_1.Query)('movieId')),
    __param(1, (0, common_1.Query)('localId')),
    __param(2, (0, common_1.Query)('localName')),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "showSchedule", null);
exports.ScheduleController = ScheduleController = __decorate([
    (0, common_1.Controller)('schedule'),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService,
        movie_service_1.MovieService,
        local_service_1.LocalService,
        log_service_1.LogService])
], ScheduleController);
//# sourceMappingURL=schedule.controller.js.map