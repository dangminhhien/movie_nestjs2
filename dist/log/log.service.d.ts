import { Model } from 'mongoose';
import { Log, LogDocument } from '../schema/log.schema';
export declare class LogService {
    private readonly logModel;
    constructor(logModel: Model<LogDocument>);
    createScheduleLog(username: string, userId: string, selectedDate: string, selectedTime: string, movieName?: string, localName?: string): Promise<LogDocument>;
    findAll(): Promise<LogDocument[]>;
    findAllByUserId(userId: string): Promise<Log[]>;
    isTimeConflict(dateTime: Date): Promise<boolean>;
}
