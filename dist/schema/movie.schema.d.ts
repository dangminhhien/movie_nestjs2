import { Document } from 'mongoose';
export type MovieDocument = Movie & Document;
export declare class Movie {
    name: string;
    content: string;
    category: string;
    image: string;
    trailer: string;
}
export declare const MovieSchema: import("mongoose").Schema<Movie, import("mongoose").Model<Movie, any, any, any, Document<unknown, any, Movie> & Movie & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Movie, Document<unknown, {}, import("mongoose").FlatRecord<Movie>> & import("mongoose").FlatRecord<Movie> & {
    _id: import("mongoose").Types.ObjectId;
}>;
