import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityTypeSchema } from 'tools/model/activity-type.model';
import { ActivitySchema } from 'tools/model/activity.mode';
import { GroupSchema } from 'tools/model/group.model';
import { InventoryTypeSchema } from 'tools/model/inventory-type.model';
import { InventorySchema } from 'tools/model/inventory.model';
import { ProductTypeSchema } from 'tools/model/product-type.model';
import { ProductSchema } from 'tools/model/product.model';
import { RoleSchema } from 'tools/model/role.model';
import { TicketTypeSchema } from 'tools/model/ticket-type.model';
import { TicketSchema } from 'tools/model/ticket.model';
import { UserSchema } from 'tools/model/user.model';
import { TotalController } from './total.controller';
import { TotalService } from './total.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Role', schema: RoleSchema },
      { name: 'Ticket', schema: TicketSchema },
      { name: 'TicketType', schema: TicketTypeSchema },
      { name: 'Product', schema: ProductSchema },
      { name: 'ProductType', schema: ProductTypeSchema },
      { name: 'Inventory', schema: InventorySchema },
      { name: 'InventoryType', schema: InventoryTypeSchema },
      { name: 'Group', schema: GroupSchema },
      { name: 'Activity', schema: ActivitySchema },
      { name: 'ActivityType', schema: ActivityTypeSchema },
    ]),
  ],
  controllers: [TotalController],
  providers: [TotalService],
})
export class TotalModule {}
