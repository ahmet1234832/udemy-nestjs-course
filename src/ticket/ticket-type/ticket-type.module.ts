import { Injectable, Module } from '@nestjs/common';
import { TicketTypeController } from './ticket-type.controller';

@Module({
    controllers: [TicketTypeController]
  })
  export class TicketTypeModule {}
