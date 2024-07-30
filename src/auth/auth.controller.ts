import { Controller, Post, Get, Request, UseGuards, Body, Res, Render, HttpStatus, Param, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('signup')
  @Render('signup')
  showSignupForm() {
    return {};
  }

  @Get('signin')
  @Render('signin')
  async showSigninForm(
    @Query('id') id: string,
  ) {
    const userId = await this.authService.findById(id);
    // console.log("userId: " + userId);
    return {};
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@Request() req, @Res() res: Response) {
    const token = await this.authService.login(req.user);
    req.session.username = req.user.username;
    req.session.userId = req.user._id;
    // console.log('userId: ', req.user._id);
    res.cookie('jwt', token.access_token, { httpOnly: true });
    res.redirect('/');
  }



  @Post('signup')
  async signup(@Body() createUserDto: any, @Res() res: Response) {
    try {
      const user = await this.authService.signup(createUserDto);
      return res.status(HttpStatus.CREATED).render('signup', { message: 'Sign up successful!' });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }
  @Post('logout')
  async logout(@Request() req, @Res() res: Response) {
    // Log session data before destruction
    console.log('Session before logout:', req.session);

    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.redirect('/'); // Handle logout error by redirecting
      }
      
      // Clear the JWT cookie
      res.clearCookie('jwt');
      
      // Log session data after destruction
      console.log('Session after logout:', req.session);

      // Redirect to signin page
      res.redirect('/auth/signin');
    });
  }
}