import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityModule } from './activity/activity.module';
import { GroupModule } from './group/group.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductModule } from './product/product.module';
import { RoleModule } from './role/role.module';
import { TicketModule } from './ticket/ticket.module';
import { ProductTypeModule } from './product/product-type/product-type.module';
import { ActivityTypeModule } from './activity/activity-type/activity-type.module';
import { InventoryTypeModule } from './inventory/inventory-type/inventory-type.module';
import { TicketTypeModule } from './ticket/ticket-type/ticket-type.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
    ActivityModule,
    GroupModule,
    InventoryModule,
    ProductModule,
    RoleModule,
    TicketModule,
    ProductTypeModule,
    ActivityTypeModule,
    InventoryTypeModule,
    ProductTypeModule,
    TicketTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
