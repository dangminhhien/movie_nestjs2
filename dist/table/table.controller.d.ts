import { LogService } from '../log/log.service';
export declare class TableController {
    private readonly logService;
    constructor(logService: LogService);
    showLogs(): Promise<{
        logs: import("../schema/log.schema").LogDocument[];
    }>;
}
