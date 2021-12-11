import { Module } from '@nestjs/common';
import { TicketTypeController } from './ticket-type/ticket-type.controller';

@Module({
  controllers: [TicketTypeController]
})
export class TicketModule {}
