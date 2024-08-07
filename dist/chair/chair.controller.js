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
const chair_service_1 = require("./chair.service");
let ChairController = class ChairController {
    constructor(chairService) {
        this.chairService = chairService;
    }
    async showChair(req) {
        const username = req.session?.username;
        return { username };
    }
};
exports.ChairController = ChairController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('chair'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], ChairController.prototype, "showChair", null);
exports.ChairController = ChairController = __decorate([
    (0, common_1.Controller)('chair'),
    __metadata("design:paramtypes", [chair_service_1.ChairService])
], ChairController);
//# sourceMappingURL=chair.controller.js.map