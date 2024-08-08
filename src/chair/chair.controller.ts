import { Controller, Get, Post, Body, Render, Req, Query } from '@nestjs/common';
import { Request } from 'express';

@Controller('chair')
export class ChairController {
  private chairs = [
    [
      { id: 'A1', status: 'available' }, { id: 'A2', status: 'available' }, { id: 'A3', status: 'available' }, { id: 'A4', status: 'available' }, { id: 'A5', status: 'available' }, { id: 'A6', status: 'available' }, { id: 'A7', status: 'available' }, { id: 'A8', status: 'available' }, { id: 'A9', status: 'available' }, { id: 'A10', status: 'available' }, { id: 'A11', status: 'available' }
    ],
    [
      { id: 'B1', status: 'available' }, { id: 'B2', status: 'available' }, { id: 'B3', status: 'available' }, { id: 'B4', status: 'available' }, { id: 'B5', status: 'available' }, { id: 'B6', status: 'available' }, { id: 'B7', status: 'available' }, { id: 'B8', status: 'available' }, { id: 'B9', status: 'available' }, { id: 'B10', status: 'available' }, { id: 'B11', status: 'available' }
    ],
  ];


  @Post()
  @Render('chair')
  async showChairForm(
    @Req() req: Request,
    @Body('selectedDate') selectedDate: string,
    @Body('selectedTime') selectedTime: string,
   
  ) {
    const username = (req as any).session?.username;
    const localName = (req as any).session?.localName;
    const movieName = (req as any).session?.name || 'Unknown Movie';
    (req as any).session.selectedDate = selectedDate;
    (req as any).session.selectedTime = selectedTime;  
    
    console.log('Form submitted1:', {
      selectedDate, selectedTime, localName, username
    });
    return { movieName, 
      localName, username, chairs: this.chairs, 
      selectedTime, selectedDate };
  }
  @Post('book')
  @Render('history')
  async bookChairs(
    @Body('chairs') chairIds: string,
    @Req() req: Request
  ) {
    const bookedChairs = chairIds.split(',');

    // Cập nhật trạng thái của ghế
    this.chairs = this.chairs.map(row =>
      row.map(chair => ({
        ...chair,
        status: bookedChairs.includes(chair.id) ? 'booked' : chair.status
      }))
    );

    const selectedDate = (req as any).session?.selectedDate;
    const selectedTime = (req as any).session?.selectedTime;
    const username = (req as any).session?.username;
    const movieName = (req as any).session?.name || 'Unknown Movie';
    const localName = (req as any).session?.localName || 'Unknown Local';

    console.log('Chairs booked:', bookedChairs);

    return { 
      message: 'Chairs booked successfully', 
      bookedChairs, 
      selectedDate, 
      selectedTime, 
      movieName, 
      localName, 
      username 
    };
  }

  @Post('reset')
  resetChairs() {
    // Đặt lại trạng thái của tất cả các ghế thành 'available'
    this.chairs = this.chairs.map(row =>
      row.map(chair => ({
        ...chair,
        status: 'available'
      }))
    );

    console.log('Chairs reset to available');
    return { message: 'Chairs reset successfully' };
  }
}
