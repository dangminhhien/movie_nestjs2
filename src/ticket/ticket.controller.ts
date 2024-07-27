import { Controller, Post, Body, Req } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post('book')
  async bookTicket(@Body() body: { movieName: string }, @Req() req: Request) {
    const username = (req as any).session?.username || 'Guest';
    await this.ticketService.create({ movieName: body.movieName, username });
    return { message: 'Ticket booked successfully' };
  }
}
