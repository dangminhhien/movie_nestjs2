import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LogDocument = Log & Document;

@Schema({ collection: 'logs' })
export class Log {
  @Prop({ required: false }) // Chỉ định là không bắt buộc nếu không cần thiết
  username: string;

  @Prop({ required: false }) // Chỉ định là không bắt buộc nếu không cần thiết
  movieName: string;

  @Prop({ required: false }) // Chỉ định là không bắt buộc nếu không cần thiết
  localName: string;

  @Prop({ required: false })
  selectedDate: string;

  @Prop({ required: false })
  selectedTime: string;

  @Prop({ type: Date, default: Date.now })
  timestamp: Date;
}

export const LogSchema = SchemaFactory.createForClass(Log);
export const LOG_MODEL_NAME = 'Log';