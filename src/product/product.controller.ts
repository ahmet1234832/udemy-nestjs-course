import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductDto } from 'tools/dtos/product.dto';
import { ProductModel } from 'tools/model/product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async getAllGroups(): Promise<ProductModel[]> {
    return this.productService.findAll();
  }
  @Get(':id')
  async getGroup(@Param('id') id: string): Promise<ProductModel> {
    return this.productService.findOne(id);
  }
  @Post()
  async createGroup(@Body() body: ProductDto): Promise<ProductModel> {
    return this.productService.createUser(body);
  }
  @Put('id')
  async updateGroup(@Param('id') id: string, @Body() body: ProductDto) {
    return this.productService.update(id, body);
  }
  @Delete('id')
  async removeGroup(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
