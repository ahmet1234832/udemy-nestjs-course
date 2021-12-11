import { Injectable } from '@nestjs/common';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/model/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuditModel } from 'tools/model/audit.model';
import { timeStamp } from 'console';
import { ResourceService } from 'libs/services/resource.service';

@Injectable()
export class UserService extends ResourceService<
  UserModel,
  UserCreateDto,
  UserUpdateDto
> {
  constructor(@InjectModel('User') userModel: Model<UserModel>) {
    super(userModel);
  }
}
