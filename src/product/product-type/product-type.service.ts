import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { ProductDto } from 'tools/dtos/product.dto';
import { ProductTypeModel } from 'tools/model/product-type.model';

@Injectable()
export class ProductTypeService extends ResourceService<
  ProductTypeModel,
  ProductDto,
  ProductDto
> {
  constructor(
    @InjectModel('ProductType') productTypeMongo: Model<ProductTypeModel>,
  ) {
    super(productTypeMongo);
  }
}
