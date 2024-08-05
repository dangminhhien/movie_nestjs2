import { IsEnum, IsString } from 'class-validator';
import { Role } from '../auth/role.enum';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsEnum(Role)
  role: Role;
}
