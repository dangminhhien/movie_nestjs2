import { Document } from 'mongoose';
export type LocalDocument = Local & Document;
export declare class Local {
    localName: string;
    local: string;
    image: string;
    map: string;
}
export declare const LocalSchema: import("mongoose").Schema<Local, import("mongoose").Model<Local, any, any, any, Document<unknown, any, Local> & Local & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Local, Document<unknown, {}, import("mongoose").FlatRecord<Local>> & import("mongoose").FlatRecord<Local> & {
    _id: import("mongoose").Types.ObjectId;
}>;
