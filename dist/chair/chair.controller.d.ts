import { ChairService } from './chair.service';
export declare class ChairController {
    private readonly chairService;
    constructor(chairService: ChairService);
    showChair(req: Request): Promise<{
        username: any;
    }>;
}
