import { Request } from 'express';
export declare class ChairController {
    showChairForm(req: Request): Promise<{
        username: any;
        chairs: {
            id: string;
            status: string;
        }[][];
    }>;
    getChairs(): {
        id: string;
        status: string;
    }[][];
    bookChairs(chairIds: string): {
        message: string;
        bookedChairs: string[];
    };
}
