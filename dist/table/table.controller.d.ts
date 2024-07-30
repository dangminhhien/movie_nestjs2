import { LogService } from '../log/log.service';
import { Request } from 'express';
export declare class TableController {
    private readonly logService;
    constructor(logService: LogService);
    showLogs(req: Request): Promise<{
        message: string;
        logs?: undefined;
        username?: undefined;
    } | {
        logs: import("../schema/log.schema").Log[];
        username: any;
        message?: undefined;
    }>;
}
