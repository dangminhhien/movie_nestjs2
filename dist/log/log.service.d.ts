import { Model } from 'mongoose';
import { LogDocument } from '../schema/log.schema';
export declare class LogService {
    private readonly logModel;
    constructor(logModel: Model<LogDocument>);
    createScheduleLog(username: string, selectedDate: string, selectedTime: string, movieName?: string, localName?: string): Promise<LogDocument>;
    findAll(): Promise<LogDocument[]>;
    isTimeConflict(dateTime: Date): Promise<boolean>;
}
