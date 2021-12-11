import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ResourceService } from '../libs/services/resource.service';
import { LibsModule } from '../libs/libs.module';

@Module({
  imports: [
    UserModule,
    LibsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
    LibsModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, ResourceService],
})
export class AppModule {}
