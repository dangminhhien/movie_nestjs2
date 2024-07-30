import { Document } from 'mongoose';
export type TicketDocument = Ticket & Document;
export declare class Ticket {
    movieName: string;
    username: string;
    createdAt: Date;
}
export declare const TicketSchema: import("mongoose").Schema<Ticket, import("mongoose").Model<Ticket, any, any, any, Document<unknown, any, Ticket> & Ticket & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Ticket, Document<unknown, {}, import("mongoose").FlatRecord<Ticket>> & import("mongoose").FlatRecord<Ticket> & {
    _id: import("mongoose").Types.ObjectId;
}>;
