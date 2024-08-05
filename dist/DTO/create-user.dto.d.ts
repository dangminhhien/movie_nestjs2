import { Role } from '../auth/role.enum';
export declare class CreateUserDto {
    username: string;
    password: string;
    role: Role;
}
