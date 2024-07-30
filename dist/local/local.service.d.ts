import { Model } from 'mongoose';
import { Local, LocalDocument } from '../schema/local.schema';
import { LocalDto } from 'src/DTO/local.dto';
export declare class LocalService {
    private localModel;
    constructor(localModel: Model<LocalDocument>);
    findAll(): Promise<Local[]>;
    findById(id: string): Promise<Local | null>;
    findOneById(id: string): Promise<LocalDto>;
}
