import { Model } from 'mongoose';
import { Schedule, ScheduleDocument } from '../schema/schedule.schema';
export declare class ScheduleService {
    private scheduleModel;
    constructor(scheduleModel: Model<ScheduleDocument>);
    create(schedule: Partial<Schedule>): Promise<Schedule>;
    findAll(): Promise<Schedule[]>;
    findOne(id: string): Promise<Schedule>;
    update(id: string, updateScheduleDto: any): Promise<Schedule>;
    remove(id: string): Promise<void>;
}
