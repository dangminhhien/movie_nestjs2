import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketService } from './ticket.service';
import { Ticket, TicketSchema } from '../schema/ticket.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }])],
  providers: [TicketService],
  exports: [TicketService], // Xuất khẩu TicketService để sử dụng ở các module khác
})
export class TicketModule {}
