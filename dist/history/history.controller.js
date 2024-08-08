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
exports.HistoryController = void 0;
const common_1 = require("@nestjs/common");
const schedule_service_1 = require("../schedule/schedule.service");
const local_service_1 = require("../local/local.service");
const log_service_1 = require("../log/log.service");
let HistoryController = class HistoryController {
    constructor(scheduleService, localService, logService) {
        this.scheduleService = scheduleService;
        this.localService = localService;
        this.logService = logService;
    }
    async showHistory(movieId, localId, req) {
        const userId = req.session?.userId;
        const username = req.session?.username;
        const movieName = req.session?.name || 'Unknown Movie';
        const localName = req.session?.localName || 'Unknown Local';
        const bookedChairs = req.session?.bookedChairs || [];
        const selectedDate = req.session?.selectedDate;
        const selectedTime = req.session?.selectedTime;
        if (!username) {
            return { message: 'Please login' };
        }
        else {
            const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);
            const isConflict = await this.logService.isTimeConflict(selectedDateTime);
            if (isConflict) {
                return { message: 'The selected time conflicts with an existing schedule. Please choose another time.' };
            }
            await this.logService.createScheduleLog(username, userId, selectedDate, selectedTime, movieName, localName);
            console.log('Form submitted2:', {
                selectedDate, selectedTime, localName, username, bookedChairs, movieName
            });
            return { username, userId, selectedDate, selectedTime, movieName, localName, movieId, localId, bookedChairs };
        }
    }
};
exports.HistoryController = HistoryController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Render)('history'),
    __param(0, (0, common_1.Query)('movieId')),
    __param(1, (0, common_1.Query)('localId')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "showHistory", null);
exports.HistoryController = HistoryController = __decorate([
    (0, common_1.Controller)('history'),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService,
        local_service_1.LocalService,
        log_service_1.LogService])
], HistoryController);
//# sourceMappingURL=history.controller.js.map