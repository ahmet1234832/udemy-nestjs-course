import { Module } from '@nestjs/common';
import { InventoryTypeService } from './inventory-type.service';

@Module({
  providers: [InventoryTypeService]
})
export class InventoryTypeModule {}
