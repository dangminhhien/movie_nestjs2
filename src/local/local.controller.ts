import { Controller, Get, Param, Render, NotFoundException, Req , Query } from '@nestjs/common';
import { LocalService } from './local.service';

@Controller('local')
export class LocalController {
  constructor(
    private readonly localService: LocalService,
  ) {}

  @Get()
  @Render('local')
  
  async showLocalForm(@Query('movieId') movieId: string, @Req() req: Request){
    const local = await this.localService.findAll();
    const username = (req as any).session?.username;
    const movieName = (req as any).session?.name || 'Unknown Movie';
    return {local, username, movieName};
  }
}