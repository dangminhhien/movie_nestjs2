import { Controller, Get, Param, Render, NotFoundException, Req } from '@nestjs/common';
import { LocalService } from './local.service';

@Controller('local')
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  @Get()
  @Render('local')
  async showLocalForm(@Req() req: Request){
    const local = await this.localService.findAll();
    const username = (req as any).session?.username;
    return {local, username};
  }
}