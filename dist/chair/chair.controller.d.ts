import { Request } from 'express';
export declare class ChairController {
    private chairs;
    showChairForm(req: Request, selectedDate: string, selectedTime: string): Promise<{
        movieName: any;
        localName: any;
        username: any;
        chairs: {
            id: string;
            status: string;
        }[][];
        selectedTime: string;
        selectedDate: string;
    }>;
    bookChairs(chairIds: string, req: Request): Promise<{
        message: string;
        bookedChairs: string[];
        selectedDate: any;
        selectedTime: any;
        movieName: any;
        localName: any;
        username: any;
    }>;
    resetChairs(): {
        message: string;
    };
}
