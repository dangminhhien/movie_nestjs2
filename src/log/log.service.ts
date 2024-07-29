import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, LogDocument, LOG_MODEL_NAME } from '../schema/log.schema'; // Cập nhật đường dẫn đúng

@Injectable()
export class LogService {
  constructor(
    @InjectModel(LOG_MODEL_NAME) private readonly logModel: Model<LogDocument>,
  ) {}

  async createScheduleLog(username: string, movieName: string, localName: string): Promise<LogDocument> {
    // Chỉ lưu các trường không bắt buộc nếu có giá trị
    const log = new this.logModel({
      username: username || undefined,
      movieName: movieName || undefined,
      localName: localName || undefined,
    });
    return log.save();
  }

  async createHistoryLog(username: string, selectedDate: string, selectedTime: string): Promise<LogDocument> {
    // Chỉ lưu các trường không bắt buộc nếu có giá trị
    const log = new this.logModel({
      username: username || undefined,
      selectedDate: selectedDate || undefined,
      selectedTime: selectedTime || undefined,
    });
    return log.save();
  }
}