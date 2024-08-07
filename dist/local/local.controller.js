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
exports.LocalController = void 0;
const common_1 = require("@nestjs/common");
const local_service_1 = require("./local.service");
let LocalController = class LocalController {
    constructor(localService) {
        this.localService = localService;
    }
    async bookTicket(id, req) {
        try {
            req.session.movieId = id;
            return { url: `/schedule?localId=${id}` };
        }
        catch (error) {
            console.error('Error:', error.message);
            throw new common_1.NotFoundException(error.message);
        }
    }
    async showLocalForm(id, movieId, res, req) {
        try {
            const locals = await this.localService.findAll();
            const selectedLocal = locals[0];
            const username = req.session?.username;
            const movieName = req.session?.name || 'Unknown Movie';
            req.session.localName = selectedLocal.localName;
            return { local: locals, username, movieId, movieName };
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
exports.LocalController = LocalController;
__decorate([
    (0, common_1.Get)(':id/schedule'),
    (0, common_1.Redirect)('/schedule'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Request]),
    __metadata("design:returntype", Promise)
], LocalController.prototype, "bookTicket", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('local'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('movieId')),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Request]),
    __metadata("design:returntype", Promise)
], LocalController.prototype, "showLocalForm", null);
exports.LocalController = LocalController = __decorate([
    (0, common_1.Controller)('local'),
    __metadata("design:paramtypes", [local_service_1.LocalService])
], LocalController);
//# sourceMappingURL=local.controller.js.map