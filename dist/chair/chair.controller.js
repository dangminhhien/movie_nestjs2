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
exports.ChairController = void 0;
const common_1 = require("@nestjs/common");
let ChairController = class ChairController {
    constructor() {
        this.chairs = [
            [
                { id: 'A1', status: 'available' }, { id: 'A2', status: 'available' }, { id: 'A3', status: 'available' }, { id: 'A4', status: 'available' }, { id: 'A5', status: 'available' }, { id: 'A6', status: 'available' }, { id: 'A7', status: 'available' }, { id: 'A8', status: 'available' }, { id: 'A9', status: 'available' }, { id: 'A10', status: 'available' }, { id: 'A11', status: 'available' }
            ],
            [
                { id: 'B1', status: 'available' }, { id: 'B2', status: 'available' }, { id: 'B3', status: 'available' }, { id: 'B4', status: 'available' }, { id: 'B5', status: 'available' }, { id: 'B6', status: 'available' }, { id: 'B7', status: 'available' }, { id: 'B8', status: 'available' }, { id: 'B9', status: 'available' }, { id: 'B10', status: 'available' }, { id: 'B11', status: 'available' }
            ],
        ];
    }
    async showChairForm(req, selectedDate, selectedTime) {
        const username = req.session?.username;
        const localName = req.session?.localName;
        const movieName = req.session?.name || 'Unknown Movie';
        req.session.selectedDate = selectedDate;
        req.session.selectedTime = selectedTime;
        console.log('Form submitted1:', {
            selectedDate, selectedTime, localName, username
        });
        return { movieName,
            localName, username, chairs: this.chairs,
            selectedTime, selectedDate };
    }
    async bookChairs(chairIds, req) {
        const bookedChairs = chairIds.split(',');
        this.chairs = this.chairs.map(row => row.map(chair => ({
            ...chair,
            status: bookedChairs.includes(chair.id) ? 'booked' : chair.status
        })));
        const selectedDate = req.session?.selectedDate;
        const selectedTime = req.session?.selectedTime;
        const username = req.session?.username;
        const movieName = req.session?.name || 'Unknown Movie';
        const localName = req.session?.localName || 'Unknown Local';
        console.log('Chairs booked:', bookedChairs);
        return {
            message: 'Chairs booked successfully',
            bookedChairs,
            selectedDate,
            selectedTime,
            movieName,
            localName,
            username
        };
    }
    resetChairs() {
        this.chairs = this.chairs.map(row => row.map(chair => ({
            ...chair,
            status: 'available'
        })));
        console.log('Chairs reset to available');
        return { message: 'Chairs reset successfully' };
    }
};
exports.ChairController = ChairController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Render)('chair'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)('selectedDate')),
    __param(2, (0, common_1.Body)('selectedTime')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], ChairController.prototype, "showChairForm", null);
__decorate([
    (0, common_1.Post)('book'),
    (0, common_1.Render)('history'),
    __param(0, (0, common_1.Body)('chairs')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ChairController.prototype, "bookChairs", null);
__decorate([
    (0, common_1.Post)('reset'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChairController.prototype, "resetChairs", null);
exports.ChairController = ChairController = __decorate([
    (0, common_1.Controller)('chair')
], ChairController);
//# sourceMappingURL=chair.controller.js.map