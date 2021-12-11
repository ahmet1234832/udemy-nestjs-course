import { Module } from '@nestjs/common';
import { InventoryTypeController } from './inventory-type/inventory-type.controller';
import { InventoryTypeModule } from './inventory-type/inventory-type.module';

@Module({
  controllers: [InventoryTypeController],
  imports: [InventoryTypeModule]
})
export class InventoryModule {}
