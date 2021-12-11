import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductTypeService } from './product-type/product-type.service';
import { ProductTypeModule } from './product-type/product-type.module';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'tools/model/product.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
