import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Schedule, ScheduleDocument } from '../schema/schedule.schema';

@Injectable()
export class ScheduleService {
  constructor(@InjectModel(Schedule.name) private scheduleModel: Model<ScheduleDocument>) {}

  async create(schedule: Partial<Schedule>): Promise<Schedule> {
    const newSchedule = new this.scheduleModel(schedule);
    return newSchedule.save();
  }

  
  async findAll(): Promise<Schedule[]> {
    return this.scheduleModel.find().exec();
  }

  async findOne(id: string): Promise<Schedule> {
    const schedule = await this.scheduleModel.findById(id).exec();
    if (!schedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
    return schedule;
  }

  async update(id: string, updateScheduleDto: any): Promise<Schedule> {
    const updatedSchedule = await this.scheduleModel.findByIdAndUpdate(id, updateScheduleDto, { new: true }).exec();
    if (!updatedSchedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
    return updatedSchedule;
  }

  
  async remove(id: string): Promise<void> {
    const result = await this.scheduleModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }
}