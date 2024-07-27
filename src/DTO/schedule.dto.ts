import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateScheduleDto {
  @IsNotEmpty()
  @IsString()
  readonly movieId: string;

  @IsNotEmpty()
  @IsString()
  readonly localId: string;

  @IsNotEmpty()
  @IsString()
  readonly localName: string;

  @IsNotEmpty()
  @IsDateString()
  readonly selectedDate: string;

  @IsNotEmpty()
  @IsString()
  readonly selectedTime: string;
}
