import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { InventoryTypeDto } from 'tools/dtos/inventory-type.dto';
import { InventoryTypeModel } from 'tools/model/inventory-type.model';

@Injectable()
export class InventoryTypeService extends ResourceService<
  InventoryTypeModel,
  InventoryTypeDto,
  InventoryTypeDto
> {
  constructor(
    @InjectModel('InventoryType') InventoryTypeMongo: Model<InventoryTypeModel>,
  ) {
    super(InventoryTypeMongo);
  }
}
