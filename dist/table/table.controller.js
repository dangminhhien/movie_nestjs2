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
exports.TableController = void 0;
const common_1 = require("@nestjs/common");
const log_service_1 = require("../log/log.service");
let TableController = class TableController {
    constructor(logService) {
        this.logService = logService;
    }
    async showLogs(req, res) {
        const username = req.session?.username;
        const userId = req.session?.userId;
        const role = req.session?.role;
        if (!userId) {
            return res.status(401).send({ message: 'Please log in to view your logs.' });
        }
        let logs;
        if (role === 'admin') {
            logs = await this.logService.findAll();
        }
        else {
            logs = await this.logService.findAllByUserId(userId);
        }
        return { logs, username };
    }
};
exports.TableController = TableController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('table'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TableController.prototype, "showLogs", null);
exports.TableController = TableController = __decorate([
    (0, common_1.Controller)('table'),
    __metadata("design:paramtypes", [log_service_1.LogService])
], TableController);
//# sourceMappingURL=table.controller.js.map