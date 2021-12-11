import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TicketCreateDto } from 'tools/dtos/ticket.dto';
import { TicketModel } from 'tools/model/ticket.model';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  async getAllGroups(): Promise<TicketModel[]> {
    return this.ticketService.findAll();
  }
  @Get(':id')
  async getGroup(@Param('id') id: string): Promise<TicketModel> {
    return this.ticketService.findOne(id);
  }
  @Post()
  async createGroup(@Body() body: TicketCreateDto): Promise<TicketModel> {
    return this.ticketService.createUser(body);
  }
  @Put('id')
  async updateGroup(@Param('id') id: string, @Body() body: TicketCreateDto) {
    return this.ticketService.update(id, body);
  }
  @Delete('id')
  async removeGroup(@Param('id') id: string) {
    return this.ticketService.delete(id);
  }
}
