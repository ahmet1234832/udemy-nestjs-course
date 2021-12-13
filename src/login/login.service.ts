import { Injectable } from '@nestjs/common';
import { UserModel } from 'tools/model/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserLoginDto } from 'tools/dtos/user.dto';
import { UserService } from 'src/user/user.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserModel>,
    private readonly userService: UserService,
  ) {}

  async loginUser(user: UserLoginDto): Promise<any> {
    try {
      const existingUser = await this.userModel
        .findOne({
          email: user.email,
        })
        .exec();

      if (existingUser) {
        let checkPwd;
        await this.userService
          .compareHashes(user.password, existingUser.password)
          .then((resp) => {
            if (resp) {
              checkPwd = true;
            } else {
              checkPwd = false;
            }
          });
        if (checkPwd) {
          const authJsonWebtoken = jwt.sign(
            { user: existingUser },
            'highwaytohell',
          );
          return await { success: true, value: authJsonWebtoken };
        } else {
          return await {
            success: false,
            response: 'User password does not correct',
          };
        }
      } else {
        return await { success: false, response: 'User does not exist' };
      }
    } catch (ex) {
      return await {
        success: false,
        response: 'Something went wrong',
        exception: ex,
      };
    }
  }
}
