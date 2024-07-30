import { ScheduleService } from './schedule.service';
import { MovieService } from '../movie/movie.service';
import { Request } from 'express';
import { LocalService } from 'src/local/local.service';
import { LogService } from 'src/log/log.service';
export declare class ScheduleController {
    private readonly scheduleService;
    private readonly movieService;
    private readonly localService;
    private readonly logService;
    constructor(scheduleService: ScheduleService, movieService: MovieService, localService: LocalService, logService: LogService);
    showSchedule(movieId: string, localId: string, localName: string, req: Request): Promise<{
        movieId: string;
        movieName: any;
        localId: string;
        localName: string;
        username: any;
    }>;
}
