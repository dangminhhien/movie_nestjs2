import { LocalService } from './local.service';
import { Response } from 'express';
export declare class LocalController {
    private readonly localService;
    constructor(localService: LocalService);
    bookTicket(id: string, req: Request): Promise<{
        url: string;
    }>;
    showLocalForm(id: string, movieId: string, res: Response, req: Request): Promise<{
        local: import("../schema/local.schema").Local[];
        username: any;
        movieId: string;
        movieName: any;
    }>;
}
