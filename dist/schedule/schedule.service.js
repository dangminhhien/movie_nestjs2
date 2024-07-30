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
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schedule_schema_1 = require("../schema/schedule.schema");
let ScheduleService = class ScheduleService {
    constructor(scheduleModel) {
        this.scheduleModel = scheduleModel;
    }
    async create(schedule) {
        const newSchedule = new this.scheduleModel(schedule);
        return newSchedule.save();
    }
    async findAll() {
        return this.scheduleModel.find().exec();
    }
    async findOne(id) {
        const schedule = await this.scheduleModel.findById(id).exec();
        if (!schedule) {
            throw new common_1.NotFoundException(`Schedule with ID ${id} not found`);
        }
        return schedule;
    }
    async update(id, updateScheduleDto) {
        const updatedSchedule = await this.scheduleModel.findByIdAndUpdate(id, updateScheduleDto, { new: true }).exec();
        if (!updatedSchedule) {
            throw new common_1.NotFoundException(`Schedule with ID ${id} not found`);
        }
        return updatedSchedule;
    }
    async remove(id) {
        const result = await this.scheduleModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Schedule with ID ${id} not found`);
        }
    }
};
exports.ScheduleService = ScheduleService;
exports.ScheduleService = ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schedule_schema_1.Schedule.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map