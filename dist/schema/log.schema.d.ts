import { Document } from 'mongoose';
export type LogDocument = Log & Document;
export declare class Log {
    username: string;
    userId: string;
    movieName?: string;
    localName?: string;
    selectedDate?: string;
    selectedTime?: string;
    timestamp: Date;
}
export declare const LogSchema: import("mongoose").Schema<Log, import("mongoose").Model<Log, any, any, any, Document<unknown, any, Log> & Log & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Log, Document<unknown, {}, import("mongoose").FlatRecord<Log>> & import("mongoose").FlatRecord<Log> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const LOG_MODEL_NAME = "Log";
