import { Injectable } from '@nestjs/common';
import { AuditModel } from 'tools/model/audit.model';
import { Model } from 'mongoose';

@Injectable()
export class ResourceService<T extends any, C extends any, U extends any> {
  constructor(protected readonly mongoModel: Model<T>) {}
  async findAll(): Promise<T[]> {
    return await this.mongoModel.find().exec();
  }

  async findOne(id: string): Promise<T> {
    return await this.mongoModel.findById(id).exec();
  }

  async createUser(model: any): Promise<T> {
    const audit = new AuditModel();
    audit.active = true;
    audit.createdBy = 'Ufuk';
    audit.createdAt = new Date();

    const createdModel = new this.mongoModel({ ...model, ...audit });

    return await createdModel.save();
  }

  async update(id: string, dto: any): Promise<any> {
    let newModel = this.mongoModel.findOne({ _id: id }).exec();
    newModel = { ...newModel, ...dto };

    return await this.mongoModel
      .findByIdAndUpdate(id, newModel, { new: true })
      .exec();
  }

  async delete(id: string): Promise<T> {
    return await this.mongoModel.findByIdAndRemove({ _id: id });
  }
}
