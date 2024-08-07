import { LogService } from '../log/log.service';
import { Request, Response } from 'express';
export declare class TableController {
    private readonly logService;
    constructor(logService: LogService);
    showLogs(req: Request, res: Response): Promise<Response<any, Record<string, any>> | {
        logs: any;
        username: any;
    }>;
}
