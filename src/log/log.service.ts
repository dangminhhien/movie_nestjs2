import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, LogDocument, LOG_MODEL_NAME } from '../schema/log.schema'; // Cập nhật đường dẫn đúng

@Injectable()
export class LogService {
  constructor(
    @InjectModel(LOG_MODEL_NAME) private readonly logModel: Model<LogDocument>,
  ) {}

  async createScheduleLog(username: string, userId: string, selectedDate: string, selectedTime: string, movieName?: string, localName?: string): Promise<LogDocument> {
    const log = new this.logModel({
      username,
      movieName,   // Có thể là undefined
      localName,   // Có thể là undefined
      selectedDate,
      selectedTime,
      userId,
      timestamp: new Date(), // Thay đổi nếu cần thiết
    });
    return log.save();
  }
  

  async findAll(): Promise<LogDocument[]> {
    return this.logModel.find().exec();
  }

  async findAllByUserId(userId: string): Promise<Log[]> {
    return this.logModel.find({ userId }).exec();
  }

  async isTimeConflict(dateTime: Date): Promise<boolean> {
    const logs = await this.findAll();
    return logs.some(log => {
      const logDateTime = new Date(log.timestamp);
      return logDateTime.getTime() === dateTime.getTime();
    });
  }

}
