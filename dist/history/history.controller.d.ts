import { ScheduleService } from 'src/schedule/schedule.service';
import { Request } from 'express';
import { LocalService } from '../local/local.service';
import { LogService } from '../log/log.service';
export declare class HistoryController {
    private readonly scheduleService;
    private readonly localService;
    private readonly logService;
    constructor(scheduleService: ScheduleService, localService: LocalService, logService: LogService);
    showHistory(selectedDate: string, selectedTime: string, movieId: string, localId: string, req: Request): Promise<{
        message: string;
        userId?: undefined;
        username?: undefined;
        selectedDate?: undefined;
        selectedTime?: undefined;
        movieName?: undefined;
        localName?: undefined;
        movieId?: undefined;
        localId?: undefined;
    } | {
        userId: any;
        username: any;
        selectedDate: string;
        selectedTime: string;
        movieName: any;
        localName: any;
        movieId: string;
        localId: string;
        message?: undefined;
    }>;
}
