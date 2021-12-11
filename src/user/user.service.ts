import { Injectable } from '@nestjs/common';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/model/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuditModel } from 'tools/model/audit.model';
import { timeStamp } from 'console';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserModel>,
  ) {}

  async findAll(): Promise<UserModel[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<UserModel> {
    return await this.userModel.findById(id).exec();
  }

  async createUser(userCreateDto: UserCreateDto): Promise<UserModel> {
    const audit = new AuditModel();
    audit.active = true;
    audit.createdBy = 'Ufuk';
    audit.createdAt = new Date();

    const createdUser = new this.userModel({ ...userCreateDto, ...audit });

    return await createdUser.save();
  }

  async update(id: string, userUpdateDto: UserUpdateDto): Promise<UserModel> {
    let newModel = this.userModel.findById(id).exec();
    newModel = { ...newModel, ...userUpdateDto };

    return await this.userModel
      .findByIdAndUpdate(id, newModel, { new: true })
      .exec();
  }

  async delete(id: string): Promise<UserModel> {
    return await this.userModel.findByIdAndRemove({ _id: id });
  }
}
