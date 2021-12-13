import { Injectable } from '@nestjs/common';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/model/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuditModel } from 'tools/model/audit.model';
import { timeStamp } from 'console';
import { ResourceService } from 'libs/services/resource.service';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashText = 'not_bacon';

@Injectable()
export class UserService extends ResourceService<
  UserModel,
  UserCreateDto,
  UserUpdateDto
> {
  constructor(@InjectModel('User') userModel: Model<UserModel>) {
    super(userModel);
  }

  async convertToHash(value: string) {
    let hashPwd;
    await bcrypt.hash(`${hashText}${value}`, saltRounds).then((hash) => {
      hashPwd = hash;
    });
    return await hashPwd;
  }

  async compareHashes(password, hashed) {
    const match = await bcrypt.compareSync(`${hashText}${password}`, hashed);
    return await match;
  }
}
