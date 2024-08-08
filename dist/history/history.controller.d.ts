import { ScheduleService } from 'src/schedule/schedule.service';
import { Request } from 'express';
import { LocalService } from '../local/local.service';
import { LogService } from '../log/log.service';
export declare class HistoryController {
    private readonly scheduleService;
    private readonly localService;
    private readonly logService;
    constructor(scheduleService: ScheduleService, localService: LocalService, logService: LogService);
    showHistory(movieId: string, localId: string, req: Request): Promise<{
        message: string;
        username?: undefined;
        userId?: undefined;
        selectedDate?: undefined;
        selectedTime?: undefined;
        movieName?: undefined;
        localName?: undefined;
        movieId?: undefined;
        localId?: undefined;
        bookedChairs?: undefined;
    } | {
        username: any;
        userId: any;
        selectedDate: any;
        selectedTime: any;
        movieName: any;
        localName: any;
        movieId: string;
        localId: string;
        bookedChairs: any;
        message?: undefined;
    }>;
}
