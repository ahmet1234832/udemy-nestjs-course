import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InventoryTypeDto } from 'tools/dtos/inventory-type.dto';
import { InventoryTypeModel } from 'tools/model/inventory-type.model';
import { InventoryTypeService } from './inventory-type.service';

@Controller('inventory-type')
export class InventoryTypeController {
  constructor(private readonly InventoryTypeService: InventoryTypeService) {}
  @Post()
  async CreateActivityType(
    @Body() body: InventoryTypeDto,
  ): Promise<InventoryTypeModel> {
    return this.InventoryTypeService.createUser(body);
  }

  @Get()
  async getAllActivityTypes(): Promise<InventoryTypeModel[]> {
    return this.InventoryTypeService.findAll();
  }

  @Get(':id')
  async GetActivityType(@Param() params): Promise<InventoryTypeModel> {
    return this.InventoryTypeService.findOne(params.id);
  }

  @Put(':id')
  async updateActivityType(
    @Param('id') id: string,
    @Body() activityTypeDto: InventoryTypeDto,
  ): Promise<InventoryTypeModel> {
    return this.InventoryTypeService.update(id, activityTypeDto);
  }

  @Delete(':id')
  async removeActivityType(
    @Param('id') id: string,
  ): Promise<InventoryTypeModel> {
    return this.InventoryTypeService.delete(id);
  }
}
