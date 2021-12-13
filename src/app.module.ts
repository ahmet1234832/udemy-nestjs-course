import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
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
import { TotalModule } from './total/total.module';
import { LoginModule } from './login/login.module';
import { TokenMiddleware } from 'libs/middleware/token.middleware';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'libs/guard/auth.guard';

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
    TotalModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .exclude('/api/login')
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
