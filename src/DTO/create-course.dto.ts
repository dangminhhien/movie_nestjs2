import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsOptional()
  imageUrl: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsOptional()
  trailer: string;
}
