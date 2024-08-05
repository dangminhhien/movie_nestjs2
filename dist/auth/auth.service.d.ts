import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schema/user.schema';
import { CreateUserDto } from '../DTO/create-user.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    signup(createUserDto: CreateUserDto): Promise<User>;
    findById(id: string): Promise<User | null>;
}
