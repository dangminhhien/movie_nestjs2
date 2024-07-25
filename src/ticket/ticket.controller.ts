import { Controller, Post, Param, Body, Req, Res } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Request, Response } from 'express';

@Controller('movie')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post(':id/book')
  async bookTicket(@Param('id') movieId: string, @Body() body: any, @Req() req: Request, @Res() res: Response) {
    try {
      const username = (req as any).session?.username;
      if (!username) {
        return res.json({ success: false, message: 'Please log in to book tickets.' });
      }

      // Fetch movie details
      const movie = await this.ticketService.getMovieDetails(movieId);
      if (!movie) {
        return res.json({ success: false, message: 'Movie not found.' });
      }

      // Save ticket
      await this.ticketService.createTicket(movieId, username, movie.name);

      return res.json({ success: true });
    } catch (error) {
      return res.json({ success: false, message: 'An error occurred while booking the ticket.' });
    }
  }
}
