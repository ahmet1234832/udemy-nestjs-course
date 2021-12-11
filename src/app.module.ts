import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LibsModule } from 'libs/libs.module';
import { ActivityController } from './activity/activity.controller';
import { GroupController } from './group/group.controller';
import { InventoryController } from './inventory/inventory.controller';
import { ProductController } from './product/product.controller';
import { RoleController } from './role/role.controller';
import { TicketController } from './ticket/ticket.controller';
import { ActivityService } from './activity/activity.service';
import { GroupService } from './group/group.service';
import { InventoryService } from './inventory/inventory.service';
import { ProductService } from './product/product.service';
import { RoleService } from './role/role.service';
import { TicketService } from './ticket/ticket.service';
import { ActivityModule } from './activity/activity.module';
import { GroupModule } from './group/group.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductModule } from './product/product.module';
import { RoleModule } from './role/role.module';
import { TicketModule } from './ticket/ticket.module';
import { TicketTypeService } from './ticket/ticket-type/ticket-type.service';

@Module({
  imports: [
    UserModule,
    LibsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
    ActivityModule,
    GroupModule,
    InventoryModule,
    ProductModule,
    RoleModule,
    TicketModule,
  ],
  controllers: [
    AppController,
    ActivityController,
    GroupController,
    InventoryController,
    ProductController,
    RoleController,
    TicketController,
  ],
  providers: [
    AppService,
    ActivityService,
    GroupService,
    InventoryService,
    ProductService,
    RoleService,
    TicketService,
    TicketTypeService,
  ],
})
export class AppModule {}
