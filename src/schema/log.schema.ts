import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LogDocument = Log & Document;

@Schema({ collection: 'logs' }) // Đảm bảo tên collection chính xác
export class Log {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: false })  // Không bắt buộc
  movieName?: string;

  @Prop({ required: false })  // Không bắt buộc
  localName?: string;

  @Prop({ required: false })  // Không bắt buộc
  selectedDate?: string;

  @Prop({ required: false })  // Không bắt buộc
  selectedTime?: string;

  @Prop({ type: Date, default: Date.now })
  timestamp: Date;
}

export const LogSchema = SchemaFactory.createForClass(Log);
export const LOG_MODEL_NAME = 'Log';
