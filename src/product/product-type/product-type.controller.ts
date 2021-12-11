import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductTypeDto } from 'tools/dtos/product-type.dto';
import { ProductTypeModel } from 'tools/model/product-type.model';
import { ProductTypeService } from './product-type.service';

@Controller('product-type')
export class ProductTypeController {
  constructor(private readonly productTypeService: ProductTypeService) {}
  @Get()
  async getAllGroups(): Promise<ProductTypeModel[]> {
    return this.productTypeService.findAll();
  }
  @Get(':id')
  async getGroup(@Param('id') id: string): Promise<ProductTypeModel> {
    return this.productTypeService.findOne(id);
  }
  @Post()
  async createGroup(@Body() body: ProductTypeDto): Promise<ProductTypeModel> {
    return this.productTypeService.createUser(body);
  }
  @Put('id')
  async updateGroup(@Param('id') id: string, @Body() body: ProductTypeDto) {
    return this.productTypeService.update(id, body);
  }
  @Delete('id')
  async removeGroup(@Param('id') id: string) {
    return this.productTypeService.delete(id);
  }
}
