import { Controller, Get, Post, Body, Render, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('chair')
export class ChairController {
  @Get()
  @Render('chair')
  async showChairForm(@Req() req: Request) {
    const username = (req as any).session?.username;
    const chairs = this.getChairs();
    return { username, chairs };
  }

  getChairs() {
    const chairs = [
      [
        { id: 'A1', status: 'available' }, { id: 'A2', status: 'available' }, { id: 'A3', status: 'available' }, { id: 'A4', status: 'available' }, { id: 'A5', status: 'available' }, { id: 'A6', status: 'available' }, { id: 'A7', status: 'available' }, { id: 'A8', status: 'available' }, { id: 'A9', status: 'available' }, { id: 'A10', status: 'available' }, { id: 'A11', status: 'available' }
      ],
      [
        { id: 'B1', status: 'available' }, { id: 'B2', status: 'available' }, { id: 'B3', status: 'available' }, { id: 'B4', status: 'available' }, { id: 'B5', status: 'available' }, { id: 'B6', status: 'available' }, { id: 'B7', status: 'available' }, { id: 'B8', status: 'available' }, { id: 'B9', status: 'available' }, { id: 'B10', status: 'available' }, { id: 'B11', status: 'available' }
      ],
    ];
    return chairs;
  }

  @Post('book')
  bookChairs(@Body('chairs') chairIds: string) {
    const bookedChairs = chairIds.split(',');
    console.log('Chairs booked:', bookedChairs);
    return { message: 'Chairs booked successfully', bookedChairs };
  }
}
