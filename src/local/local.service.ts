import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Local, LocalDocument } from '../schema/local.schema';
import { LocalDto } from 'src/DTO/local.dto';

@Injectable()
export class LocalService {
  constructor(@InjectModel(Local.name) private localModel: Model<LocalDocument>) {}

  async findAll(): Promise<Local[]> {
    return this.localModel.find().exec();
  }
  async findById(id: string): Promise< Local | null> {
    return this.localModel.findById(id).exec();
  }

  async findOneById(id: string): Promise<Local> {
    return this.localModel.findById(id).exec();
  }

}