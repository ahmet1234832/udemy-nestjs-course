import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TicketTypeDto } from 'tools/dtos/ticket-type.dto';
import { TicketTypeModel } from 'tools/model/ticket-type.model';
import { TicketTypeService } from './ticket-type.service';

@Controller('ticket-type')
export class TicketTypeController {
  constructor(private readonly ticketTypeService: TicketTypeService) {}
  @Get()
  async getAllGroups(): Promise<TicketTypeModel[]> {
    return this.ticketTypeService.findAll();
  }
  @Get(':id')
  async getGroup(@Param('id') id: string): Promise<TicketTypeModel> {
    return this.ticketTypeService.findOne(id);
  }
  @Post()
  async createGroup(@Body() body: TicketTypeDto): Promise<TicketTypeModel> {
    return this.ticketTypeService.createUser(body);
  }
  @Put('id')
  async updateGroup(@Param('id') id: string, @Body() body: TicketTypeDto) {
    return this.ticketTypeService.update(id, body);
  }
  @Delete('id')
  async removeGroup(@Param('id') id: string) {
    return this.ticketTypeService.delete(id);
  }
}
