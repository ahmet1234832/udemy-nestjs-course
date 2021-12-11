import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductTypeService } from './product-type/product-type.service';
import { ProductTypeModule } from './product-type/product-type.module';

@Module({
  controllers: [ProductController],
  providers: [ProductTypeService],
  imports: [ProductTypeModule]
})
export class ProductModule {}
