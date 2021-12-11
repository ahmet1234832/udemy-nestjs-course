import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InventoryDto } from 'tools/dtos/inventory.dto';
import { InventoryModel } from 'tools/model/inventory.model';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}
  @Get()
  async getAllGroups(): Promise<InventoryModel[]> {
    return this.inventoryService.findAll();
  }
  @Get(':id')
  async getGroup(@Param('id') id: string): Promise<InventoryModel> {
    return this.inventoryService.findOne(id);
  }
  @Post()
  async createGroup(@Body() body: InventoryDto): Promise<InventoryModel> {
    return this.inventoryService.createUser(body);
  }
  @Put('id')
  async updateGroup(@Param('id') id: string, @Body() body: InventoryDto) {
    return this.inventoryService.update(id, body);
  }
  @Delete('id')
  async removeGroup(@Param('id') id: string) {
    return this.inventoryService.delete(id);
  }
}
