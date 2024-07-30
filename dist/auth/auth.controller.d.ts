import { AuthService } from './auth.service';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    showSignupForm(): {};
    showSigninForm(id: string): Promise<{}>;
    signin(req: any, res: Response): Promise<void>;
    signup(createUserDto: any, res: Response): Promise<void | Response<any, Record<string, any>>>;
    logout(req: any, res: Response): Promise<void>;
}
